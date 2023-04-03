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
        profession: "",
        sex: "male",
        qualities: []
    })
    const [loading, setLoading] = useState(true)
    const [qualities, setQualities] = useState([])
    const [errors, setErrors] = useState({})
    const [professions, setProfession] = useState([])

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label }
            }
        }
    }
    const getQualities = (elements) => {
        const qualitiesArray = []
        for (const elem of elements) {
            for (const qualiti in qualities) {
                if (elem.value === qualities[qualiti].value) {
                    qualitiesArray.push({
                        _id: qualities[qualiti].value,
                        name: qualities[qualiti].label,
                        color: qualities[qualiti].color
                    })
                }
            }
        }
        return qualitiesArray
    }
    const arrayInObject = (data) =>
        data.map((item) => ({
            label: item.name,
            value: item._id,
            color: item.color
        }))
    useEffect(() => {
        api.users.getById(userId).then((user) => {
            setData((prev) => ({
                ...prev,
                ...user,
                profession: user.profession._id,
                qualities: arrayInObject(user.qualities)
            }))
        })
        api.professions.fetchAll().then((data) => {
            setProfession(data)
        })
        api.qualities.fetchAll().then((data) => {
            const qualityList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }))
            setQualities(qualityList)
        })
    }, [])

    useEffect(() => {
        if (professions.length > 0 && qualities.length > 0 && data._id) {
            setLoading(false)
        }
    }, [data, professions, qualities])

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
        const { profession, qualities } = data
        api.users
            .update(userId, {
                ...data,
                profession: getProfessionById(profession),
                qualities: getQualities(qualities)
            })
            .then(() => history.goBack())
    }
    return (
        <>
            {!loading ? (
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
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </>
    )
}

export default UpdatePageUser
