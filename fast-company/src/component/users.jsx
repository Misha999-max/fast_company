/* eslint-disable react/prop-types */
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import api from "../api"
import SearchStatus from "./searchStatus"
import User from "./user"
import Pagination from "./pagination"
import { paginate } from "../api/utils/paginate"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const count = users.length
    const pageSize = 4
    const handleChangeBookmarkStatus = (id) => {
        const newArrayBookmakChange = [...users]
        let bookmarkcheck = newArrayBookmakChange.find(
            (user) => user._id === id
        )
        bookmarkcheck.bookmark = bookmarkcheck.bookmark ? false : true
        newArrayBookmakChange.bookmark = bookmarkcheck.bookmark
        setUsers(newArrayBookmakChange)
    }
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handeDelet = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id))
    }
    const userCrop = paginate(users, currentPage, pageSize)

    return (
        <>
            <SearchStatus user={users} />
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
        </>
    )
}

export default Users
