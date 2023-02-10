import React from "react";

const ButtonDelete = (props) => {
    const {id,handeDelet} = props
    return (
        <button onClick={() => handeDelet(id)}  className="btn btn-danger">DELETE</button>
    )
}

export default ButtonDelete