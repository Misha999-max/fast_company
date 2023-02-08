import React from "react";

const Qualitie = (props) => {
    const {user} = props
    return (
        <th>{user.qualities.map(qual => (
            <span className={"badge bg-" + qual.color + " m-2 p-2"}>{qual.name}</span>
        ))}</th>
    )
}

export default Qualitie