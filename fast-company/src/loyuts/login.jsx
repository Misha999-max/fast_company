/* eslint-disable react/prop-types */
import React, { useState } from "react"
import LoginForm from "../component/ui/loginForm"
import { useParams } from "react-router"
import RegisterForm from "../component/ui/registerForm"

const Login = () => {
    const { type } = useParams()
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    )
    const togglleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        )
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-3">
                    <h3 className="mb-4">{formType}</h3>
                    {formType === "register" ? (
                        <>
                            <RegisterForm />
                            <p>
                                already have account?{"  "}
                                <a role="button" onClick={togglleFormType}>
                                    Sing In
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <LoginForm />
                            <p>
                                Dont have account?{"  "}
                                <a role="button" onClick={togglleFormType}>
                                    Sing Up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
