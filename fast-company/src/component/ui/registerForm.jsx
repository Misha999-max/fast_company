/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { validator } from "../utils/validate"
import TextFields from "../common/form/textFields"
import api from "../../api"
import SelectField from "../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import CheckBoxField from "../common/form/checkBoxField"

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    })
    const [qualities, setQualities] = useState({})
    const [errors, setErrors] = useState({})
    const [professions, setProfession] = useState()

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfession(data)
        })
        api.qualities.fetchAll().then((data) => setQualities(data))
    }, [])
    const handelChange = (target) => {
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
        },
        profession: {
            isRequired: {
                massage: "Обязательно выберите вашу профессию!"
            }
        },
        licence: {
            isRequired: {
                massage:
                    "Вы не можете использовать сервис без подтверждения лицензионного соглашения"
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
            <SelectField
                label="Выберите вашу профессию"
                value={data.profession}
                onChange={handelChange}
                defaultOption=" Choose..."
                options={professions}
                error={errors.profession}
            />
            <RadioField
                options={[
                    { name: "male", value: "male" },
                    { name: "female", value: "Female" },
                    { name: "other", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handelChange}
                label="Выберите ваш пол"
            />
            <MultiSelectField
                options={qualities}
                onChange={handelChange}
                name="qualities"
                label="Выберите ваше качество"
            />
            <CheckBoxField
                value={data.licence}
                onChange={handelChange}
                name="licence"
                error={errors.licence}
            >
                потвердить <a>лицензионное соглашение</a>
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

export default RegisterForm
