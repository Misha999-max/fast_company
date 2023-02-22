/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"

const SearchStatus = ({ count }) => {
    const titleBGColor = count !== 0 ? "bg-primary p-2" : "bg-danger p-2"
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1))
        if (number > 4 && number < 15) return "человек тусанет"
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"
        if (lastOne === 1) return "человек тусанет"
        return "человек тусанет"
    }
    return (
        <h1 className={titleBGColor}>
            {count} {count ? renderPhrase(count) : "никто"} с тобой сегодня{" "}
        </h1>
    )
}

SearchStatus.prototype = {
    count: PropTypes.number.isRequired
}
export default SearchStatus
