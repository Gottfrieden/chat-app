import React from 'react';
import './chat-app.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} />
            <div className="name">
                {props.name}
                <div className="status">
                    <span className={props.online ? "status-online" : "status-offline"}></span>
                    {props.online? props.isOnLine : props.isOffLine}
                </div>
            </div>
            
        </div>
    )
}

export default Contact;