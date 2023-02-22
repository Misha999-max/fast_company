/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
import Qualitie from "./qualitie"
import Bookmark from "./bookmark"
import ButtonDelete from "./btn/buttonDelete"

const User = ({ user, handeDelet, handleChangeBookmarkStatus }) => {
    console.log(typeof user)
    return (
        <tr key={user._id}>
            <th scope="row">{user.name}</th>
            <th>
                <Qualitie qualitie={user.qualities} />
            </th>
            <th>{user.profession.name}</th>
            <th>{user.completedMeetings}</th>
            <th>{user.rate}</th>
            <th>
                <Bookmark
                    handleChangeBookmarkStatus={handleChangeBookmarkStatus}
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
