/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import API from "../../../api"

const UserPage = ({ userId }) => {
    // const history = useHistory()
    const [user, setUser] = useState()
    useEffect(() => {
        API.users.getById(userId).then((user) => setUser(user))
    }, [])
    // const handlepush = () => {
    //     history.push("/users")
    // }

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
                    {/* <button onClick={handlepush}>К Users</button> */}
                    <Link to={`/update/${userId}`} user={user}>
                        {" "}
                        Обновить{" "}
                    </Link>
                </div>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </>
    )
}

export default UserPage
