/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
// import User from "./user"
import TableHeader from "./tableHeader"
import TableBody from "./tableBody"
import Bookmark from "./bookmark"
import ButtonDelete from "./btn/buttonDelete"
import Qualitie from "./qualitie"
import Table from "./table"

const UsersTable = ({
    users,
    onSort,
    currentSort,
    count,
    handeDelet,
    handleChange,
    iconsort
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
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
