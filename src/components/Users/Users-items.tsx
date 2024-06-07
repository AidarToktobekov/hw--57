import React from "react";
import { User } from "../../types";

interface Props{
    user: User;
}

const UsersItems:React.FC<Props> = ({user})=>{
    let activity;
    if(user.activity){
        activity = 'active';
    }
    else{
        activity = 'not active';
    }
    return(
        <>
        <div className="card mt-3 p-3">
            <h5 className="card-title">
                Name: {user.name}
            </h5>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Activity: {activity}</p>
            <p className="card-text">Role: {user.role}</p>
        </div>
        </>
    )
}

export default UsersItems