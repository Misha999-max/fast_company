import React, { useState, useEffect } from "react"
import { validator } from "../utils/validate"
import TextFields from "../common/form/textFields"
import CheckBoxField from "../common/form/checkBoxField"
// import * as yup from "yup"

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false })
    const [errors, setErrors] = useState({})

    const handelChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    // const validateScheme = yup.object().shape({
    //     password: yup
    //         .string()
    //         .required("Поле обязательно для заполнения")
    //         .matches(
    //             /(?=.*[A-Z])/,
    //             "Пароль должен содержать хотябы одну заглавную букву"
    //         )
    //         .matches(/(?=.*[0-9])/, "Пароль должен содержать хоть одну цифру")
    //         .matches(
    //             /(?=.*[@!#$%^&*])/,
    //             "Пароль должен содержать один из специальных символов @!#$%^&*"
    //         )
    //         .matches(/(?=.{8,})/, "Пароль должен быть более 8 символов"),
    //     email: yup
    //         .string()
    //         .required("Поле обязательно для заполнения")
    //         .email("Email введен некорректно")
    // })
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
        // validateScheme
        //     .validate(data)
        //     .then(() => setErrors({}))
        //     .catch((err) => setErrors({ [err.path]: err.massage }))
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
        <form onSubmit={handleSubmit}>
            <TextFields
                label="електронная почта"
                type="text"
                name="email"
                value={data.email}
                onChange={handelChange}
                error={errors.email}
            />
            <TextFields
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handelChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handelChange}
                name="stayOn"
            >
                Оставаться в системе
            </CheckBoxField>
            <button
                disabled={!isValid}
                className="btn btn-primary mx-auto w-100"
            >
                Submit
            </button>
        </form>
    )
}

export default LoginForm
