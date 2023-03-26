/* eslint-disable react/prop-types */
import React from "react"
import UserPage from "../component/userPage"
import UsersList from "../component/users"
import { useParams } from "react-router-dom"

const Users = () => {
    const { userId } = useParams()
    console.log(userId)
    return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>
}

export default Users
