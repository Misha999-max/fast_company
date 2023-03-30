/* eslint-disable react/prop-types */
import React from "react"

const CheckBoxField = ({ name, value, onChange, error, children }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value })
    }
    const addClassInput = () => {
        return "form-check-input" + (error ? " is-invalid" : "")
    }
    return (
        <div className="form-check mb-4">
            <input
                className={addClassInput()}
                type="checkbox"
                value=""
                id={name}
                onChange={handleChange}
                checked={value}
            />
            <label className="form-check-label" htmlFor={name}>
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

export default CheckBoxField
