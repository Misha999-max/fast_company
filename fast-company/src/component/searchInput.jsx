/* eslint-disable react/prop-types */
import React from "react"

const SearchInput = ({ handleSubmit, value }) => {
    return (
        <div className="input-group mb-3">
            <input
                placeholder="Search Name"
                type="text"
                className="input-group mb-3 p-2"
                value={value}
                onChange={(e) => handleSubmit(e.target.value)}
            />
        </div>
    )
}

export default SearchInput
