/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
import TableHeader from "../common/table/tableHeader"
import TableBody from "../common/table/tableBody"
import Bookmark from "../common/bookmark"
import ButtonDelete from "../btn/buttonDelete"
import Qualitie from "./qualities/qualitie"
import Table from "../common/table/table"
import { Link } from "react-router-dom"

const UsersTable = ({
    users,
    onSort,
    currentSort,
    count,
    handeDelet,
    handleChange,
    iconsort,
    handleSubmit,
    value
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "Качества",
            component: (user) => <Qualitie qualities={user.qualities} />
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился,раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Bookmark
                    handleChange={handleChange}
                    bookmark={user.bookmark}
                    id={user._id}
                />
            )
        },
        delete: {
            component: (user) => (
                <ButtonDelete id={user._id} handeDelet={handeDelet} />
            )
        }
    }
    return (
        <Table
            onSort={onSort}
            selectedSort={currentSort}
            columns={columns}
            data={users}
            count={count}
            handleSubmit={handleSubmit}
            value={value}
        >
            <table className="table">
                <TableHeader
                    iconsort={iconsort}
                    onSort={onSort}
                    selectedSort={currentSort}
                    columns={columns}
                />
                {count !== 0 ? (
                    <TableBody data={users} columns={columns} />
                ) : (
                    <div className="badge m-10 bg-warning">
                        Что-то ни кто не хочет тусить
                    </div>
                )}
            </table>
        </Table>
    )
}

UsersTable.prototypes = {
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
}

export default UsersTable
