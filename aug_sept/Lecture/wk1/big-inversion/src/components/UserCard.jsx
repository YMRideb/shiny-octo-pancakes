import React from "react";

const UserCard = (props) => {
    return(
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            {props.children}
        </div>
    )
}

export default UserCard;