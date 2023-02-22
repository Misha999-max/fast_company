/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.css"

const Bookmark = ({ bookmark, handleChangeBookmarkStatus, id }) => {
    return (
        <button
            className="btnBookmark"
            onClick={() => handleChangeBookmarkStatus(id)}
        >
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
    handleChangeBookmarkStatus: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}
export default Bookmark
