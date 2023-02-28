/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns, iconsort }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            })
        } else {
            onSort({ path: item, order: "asc" })
        }
    }
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        className={columns[column].path ? "changeFilter" : ""}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        scope="col"
                    >
                        {columns[column].name} {iconsort || null}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
TableHeader.prototype = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
