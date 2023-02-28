/* eslint-disable react/prop-types */
import React from "react"
import TableBody from "./tableBody"
import TableHeader from "./tableHeader"
import PropTypes from "prop-types"

const Table = ({ onSort, currentSort, columns, data, count, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader
                        onSort={onSort}
                        selectedSort={currentSort}
                        columns={columns}
                    />
                    {count !== 0 ? (
                        <TableBody data={data} columns={columns} />
                    ) : (
                        <div className="badge m-10 bg-warning">
                            Что-то ни кто не хочет тусить
                        </div>
                    )}
                </>
            )}
        </table>
    )
}
Table.prototypes = {
    onSort: PropTypes.func,
    currentSort: PropTypes.func,
    columns: PropTypes.object,
    data: PropTypes.array,
    count: PropTypes.number,
    children: PropTypes.array
}

export default Table
