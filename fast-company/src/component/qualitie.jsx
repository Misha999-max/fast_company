import React from "react";

const Qualitie = (props) => {
    const {qualitie} = props
    return (
        <>
        {qualitie.map(qual => (
           <span className={"badge bg-" + qual.color + " m-2 p-2"}>{qual.name}</span>
        ))}
        </>
    )
}

export default Qualitie