/* eslint-disable react/prop-types */
import React from "react"
import Qualitie from "./qualitie"
import PropTypes from "prop-types"

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <Qualitie key={qual._id} qualities={qual} />
            ))}
        </>
    )
}

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
}

export default QualitiesList
