/* eslint-disable react/prop-types */
import React from "react"
import UserPage from "../component/page/userListPage/userPage"
import UsersList from "../component/page/userPage/users"
import { useParams } from "react-router-dom"

const Users = () => {
    const { userId } = useParams()
    console.log(userId)
    return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>
}

export default Users
