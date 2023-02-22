/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import api from "../api"
import SearchStatus from "./searchStatus"
import User from "./user"
import Pagination from "./pagination"
import { paginate } from "./utils/paginate"
import GroupList from "./groupList"

const Users = () => {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfession] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [count, setCount] = useState(users.lenght)
    const pageSize = 4

    const handleChangeBookmarkStatus = (id) => {
        const newArrayBookmakChange = [...users]
        const bookmarkcheck = newArrayBookmakChange.find(
            (user) => user._id === id
        )
        bookmarkcheck.bookmark = !bookmarkcheck.bookmark
        newArrayBookmakChange.bookmark = bookmarkcheck.bookmark
        setUsers(newArrayBookmakChange)
    }

    useEffect(() => {
        api.users.fetchAll().then((result) => {
            setUsers(result)
            setCount(result.length)
        })
        api.professions.fetchAll().then((data) => {
            setProfession(data)
        })
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handeDelet = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id))
        setCount(users.length - 1)
    }
    const clearFilter = () => {
        setSelectedProf()
    }
    console.log(users)
    const filterUsers = selectedProf
        ? users.filter((user) => user.profession.name === selectedProf.name)
        : users
    useEffect(() => {
        setCount(filterUsers.length)
    }, [filterUsers])
    const userCrop = paginate(filterUsers, currentPage, pageSize)

    return (
        <div className="d-flex justyfi-content-center">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Clear
                    </button>
                </div>
            )}

            <div className="d-flex flex-column">
                <SearchStatus count={count} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя </th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился,раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {count !== 0 ? (
                            userCrop.map((user) => (
                                <User
                                    key={user._id}
                                    user={user}
                                    handeDelet={handeDelet}
                                    handleChangeBookmarkStatus={
                                        handleChangeBookmarkStatus
                                    }
                                />
                            ))
                        ) : (
                            <div className="badge m-10 bg-warning">
                                Что-то ни кто не хочет тусить
                            </div>
                        )}
                    </tbody>
                </table>
                <Pagination
                    itemCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onChangePage={handlePageChange}
                />
            </div>
        </div>
    )
}

export default Users
