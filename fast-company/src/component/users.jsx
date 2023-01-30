import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import api from '../api'

const Users = () => {
    console.log(api.users.fetchAll())
    return <h1>Users</h1>
}


export default Users