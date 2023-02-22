/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"

const Qualitie = (props) => {
    const { qualitie } = props

    return (
        <>
            {qualitie.map((qual) => (
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
    qualitie: PropTypes.array.isRequired
}

export default Qualitie
