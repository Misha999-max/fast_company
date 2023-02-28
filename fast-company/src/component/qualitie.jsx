/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"

const Qualitie = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <span
                    key={qual._id}
                    className={"badge bg-" + qual.color + " m-2 p-2"}
                >
                    {qual.name}
                </span>
            ))}
        </>
    )
}
Qualitie.prototype = {
    qualities: PropTypes.array.isRequired
}

export default Qualitie
