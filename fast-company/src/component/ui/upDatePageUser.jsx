/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import api from "../../api"
import MultiSelectField from "../common/form/multiSelectField"
import RadioField from "../common/form/radioField"
import SelectField from "../common/form/selectField"
import TextFields from "../common/form/textFields"
import { validator } from "../utils/validate"

const UpdatePageUser = () => {
    const { userId } = useParams()
    const history = useHistory()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: []
    })

    const [qualities, setQualities] = useState({})
    const [errors, setErrors] = useState({})
    const [professions, setProfession] = useState()

    useEffect(() => {
        api.professions.fetchAll().then((users) => {
            setProfession(users)
        })
        api.qualities.fetchAll().then((data) => setQualities(data))
    }, [])

    const handleUpdateUser = () => {
        api.users.update(userId, data)
        history.push(`/users/${userId}`)
    }

    const handelChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        name: {
            isRequired: {
                massage: "Поля для обязательного заполнения"
            }
        },
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
        <form onSubmit={handleSubmit} className="container">
            <TextFields
                label="Введите имя"
                type="text"
                name="name"
                value={data.name}
                onChange={handelChange}
                error={errors.name}
            />
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

            <button
                disabled={!isValid}
                className="btn btn-primary mx-auto w-100"
                onClick={handleUpdateUser}
            >
                Submit
            </button>
        </form>
    )
}

export default UpdatePageUser
