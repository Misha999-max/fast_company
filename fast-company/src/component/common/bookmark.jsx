/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.css"

const Bookmark = ({ bookmark, handleChange, id }) => {
    return (
        <button className="btnBookmark" onClick={() => handleChange(id)}>
            {bookmark ? (
                <i className="bi bi-person-plus-fill"></i>
            ) : (
                <i className="bi bi-person-plus"></i>
            )}
        </button>
    )
}

Bookmark.prototype = {
    bookmark: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}
export default Bookmark
