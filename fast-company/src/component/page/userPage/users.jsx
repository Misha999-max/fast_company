/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import api from "../../../api"
import SearchStatus from "../../ui/searchStatus"
import Pagination from "../../common/pagination"
import { paginate } from "../../utils/paginate"
import GroupList from "../../common/groupList"
import UsersTable from "../../ui/usersTable"
import _ from "lodash"

const Users = () => {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfession] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [iconsort, setIconSort] = useState()
    const [inputSearch, setInputSerch] = useState("")
    const [count, setCount] = useState(users.lenght)
    const pageSize = 6
    const [sortBy, setSortby] = useState({ iter: "name", order: "asc" })

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

    useEffect(() => {
        setIconSort(
            sortBy.order === "asc" ? (
                <i className="bi bi-caret-up-fill"></i>
            ) : (
                <i className="bi bi-caret-down-fill"></i>
            )
        )
    }, [sortBy])

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
        setInputSerch("")
    }
    const handleSort = (item) => {
        setSortby(item)
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

    // поиск users через строку поиска
    const handleSubmit = (value) => {
        setInputSerch(value)
        setSelectedProf([])
    }

    const filterUsers = inputSearch
        ? users.filter((item) => {
              return new RegExp(`${inputSearch}`, "gi").test(item.name)
          })
        : selectedProf
        ? users.filter((user) => user.profession._id === selectedProf._id)
        : users
    useEffect(() => {
        setCount(filterUsers.length)
    }, [filterUsers])
    const sortedUsers = _.orderBy(filterUsers, [sortBy.path], [sortBy.order])
    const userCrop = paginate(sortedUsers, currentPage, pageSize)

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
                <UsersTable
                    iconsort={iconsort}
                    users={userCrop}
                    handeDelet={handeDelet}
                    count={count}
                    handleChange={handleChangeBookmarkStatus}
                    onSort={handleSort}
                    currentSort={sortBy}
                    handleSubmit={handleSubmit}
                    value={inputSearch}
                />

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
