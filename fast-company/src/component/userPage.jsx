/* eslint-disable react/prop-types */
import React from "react"

import { useHistory } from "react-router-dom"

const UserPage = ({ id, users }) => {
    const history = useHistory()
    const getUser = (id) => {
        return users.find((item) => item._id === id)
    }
    const handlepush = () => {
        history.push("/users")
    }
    const user = getUser(id)
    return (
        <>
            {user ? (
                <div className="userPage">
                    <h1>{user.name}</h1>
                    <p className="userPage-profession">
                        profession: {user.profession.name}
                    </p>
                    {user.qualities.map((qual) => (
                        <p
                            key={qual._id}
                            className={"badge bg-" + qual.color + " m-2 p-2"}
                        >
                            {qual.name}
                        </p>
                    ))}
                    <p>Rate: {user.rate}</p>
                    <button onClick={handlepush}>К Users</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default UserPage
