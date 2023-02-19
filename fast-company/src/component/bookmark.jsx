/* eslint-disable react/prop-types */
import React from "react"
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
export default Bookmark
