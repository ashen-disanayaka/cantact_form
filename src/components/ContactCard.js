import React from "react";
import user from "../img/user.png";

const ContactCard =(props) =>{
    
    const {id, name, email}= props.contact;
    return(
        <div className="item">
        <img className="ui avatar image" src={user} alt="user"/>
                <div className="content">
                     <div className="header">
                     {name}
                     </div>
                     <div>{email}</div>
                     <i className="trash alternate outline icon red"></i>
                </div>
            </div>
    );


};

export default ContactCard;