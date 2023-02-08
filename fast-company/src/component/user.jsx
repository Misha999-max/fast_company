import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
    const {user,handeDelet,handleChangeBookmarkStatus} = props
    return (
        <tr key={user._id}>
        <th scope="row">{user.name}</th>
        <Qualitie user={user}/>
        <th>{user.profession.name}</th>
        <th>{user.completedMeetings}</th>
        <th>{user.rate}</th>
        <Bookmark handleChangeBookmarkStatus={handleChangeBookmarkStatus} user={user}/>
        <th>
         <button onClick={() => handeDelet(user._id)}  className="btn btn-danger">DELETE</button>
        </th>
    </tr>

    )
}
export default User