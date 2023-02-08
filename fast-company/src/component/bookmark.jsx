import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const Bookmark = (props) => {
    const {user,handleChangeBookmarkStatus} = props
    return(
        <th onClick={()=>handleChangeBookmarkStatus(user._id)}>{
            user.bookmark ?
            <i className="bi bi-person-plus-fill"></i> :
            <i className="bi bi-person-plus"></i>
         }</th>
    )
}   
export default Bookmark