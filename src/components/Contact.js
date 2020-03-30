import React from 'react';
import './chat-app.css';

const avatarURL = 'https://randomuser.me/api/portraits/men/33.jpg';
const avatarName = {
    firstName:'Timmothy',
    lastName: 'Hopkins'
}

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src={avatarURL} />
            <div className="name">
                {avatarName.firstName + " " + avatarName.lastName}
                <div className="status">
                    <span className="status-online"></span>
                    online
                </div>
            </div>
            
        </div>
    )
}

export default Contact;