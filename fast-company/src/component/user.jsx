/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
import Qualitie from "./qualitie"
import Bookmark from "./bookmark"
import ButtonDelete from "./btn/buttonDelete"
import { Link } from "react-router-dom"

const User = ({ user, handeDelet, handleChange }) => {
    return (
        <tr key={user._id}>
            <th>
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            </th>
            <th>
                <Qualitie qualitie={user.qualities} />
            </th>
            <th>{user.profession.name}</th>
            <th>{user.completedMeetings}</th>
            <th>{user.rate}</th>
            <th>
                <Bookmark
                    handleChange={handleChange}
                    bookmark={user.bookmark}
                    id={user._id}
                />
            </th>

            <th>
                <ButtonDelete id={user._id} handeDelet={handeDelet} />
            </th>
        </tr>
    )
}

User.prototype = {
    user: PropTypes.object.isRequired,
    handeDelet: PropTypes.func.isRequired,
    handleChangeBookmarkStatus: PropTypes.func.isRequired
}
export default User
