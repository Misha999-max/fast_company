/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import TextFields from "./textFields"
import { validator } from "./utils/validate"

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})

    const handelChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const validatorConfig = {
        email: {
            isRequired: {
                massage: "Поле обязательно для заполнения"
            },
            isEmail: {
                massage: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                massage: "Поле обязательно для заполнения"
            },
            isCorrectPassword: {
                massage: "Пароль должен содержать хотябы одну заглавную букву"
            },
            IsContentDigit: {
                massage: "Пароль должен содержать хоть одну цифру"
            },
            min: {
                massage: "Пароль должен быть более 8 символов",
                value: 8
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-3">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextFields
                            label="електронная почта"
                            type="text"
                            name="email"
                            value={data.email}
                            handelChange={handelChange}
                            error={errors.email}
                        />
                        <TextFields
                            label="Пароль"
                            type="password"
                            name="password"
                            value={data.password}
                            handelChange={handelChange}
                            error={errors.password}
                        />
                        <button
                            disabled={!isValid}
                            className="btn btn-primary mx-auto w-100"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
