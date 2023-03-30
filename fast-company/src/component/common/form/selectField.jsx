/* eslint-disable react/prop-types */
import React from "react"

const SelectField = ({
    label,
    value,
    onChange,
    defaultOption,
    options,
    error
}) => {
    const optionArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  name: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const addClassInput = () => {
        return "form-select" + (error ? " is-invalid" : "")
    }

    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                className={addClassInput()}
                id="validationCustom04"
                value={value}
                name="profession"
                onChange={handleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionArray &&
                    optionArray.map((name) => (
                        <option key={name.value} value={name.value}>
                            {name.name}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

export default SelectField
