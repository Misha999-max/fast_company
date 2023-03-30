/* eslint-disable react/prop-types */
import React from "react"
import Select from "react-select"

const MultiSelectField = ({ options, onChange, name, label }) => {
    const optionArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  label: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options
    const handelChange = (value) => {
        onChange({ name, value })
    }
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                options={optionArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handelChange}
                name={name}
            />
        </div>
    )
}

export default MultiSelectField
