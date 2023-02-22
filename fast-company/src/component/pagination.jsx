import React from "react"
import _ from "lodash"
import PropTypes from "prop-types"

const Pagination = ({ itemCount, pageSize, onChangePage, currentPage }) => {
    console.log(itemCount)
    const pageCount = Math.ceil(itemCount / pageSize)
    if (pageCount === 1) return null
    const pages = _.range(1, pageCount + 1)
    return (
        <nav className="nav__paginate">
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        key={"page_" + page}
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                    >
                        <button
                            className="page-link"
                            onClick={() => {
                                onChangePage(page)
                            }}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination
