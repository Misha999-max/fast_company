import React from "react";

const SearchStatus = (props) => {
    const {user} = props
    const titleBGColor = user.length !== 0 ? 'bg-primary p-2' : "bg-danger p-2" 
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        if (lastOne === 1) return "человек тусанет";
        return "человек тусанет";
        };
    return (
        <h1 className={titleBGColor}>{user.length} {renderPhrase(user.length)} с тобой сегодня </h1>
    )
}
export default SearchStatus