/* eslint-disable react/prop-types */
import React, { useState } from "react"

const TextFields = ({ value, label, name, onChange, type, error }) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const addClassInput = () => {
        return "form-control" + (error ? " is-invalid" : "")
    }
    const toggleshowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    value={value}
                    name={name}
                    onChange={handleChange}
                    className={addClassInput()}
                />
                {type === "password" && (
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={toggleshowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (!showPassword ? "-slash" : "")
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}

export default TextFields
