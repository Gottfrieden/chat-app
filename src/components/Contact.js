import React from 'react';
import './chat-app.css';
import { render } from '@testing-library/react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
            };
        }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} />
                <div className="name">
                    {this.props.name}
                    <div className="status">
                        <span onClick={event => {
                        const switchStatus = !this.state.online;
                        this.setState({online: switchStatus}); 
                    }
                    } className={this.state.online ? "status-online" : "status-offline"}></span>
                        {this.state.online? "online" : "offline"}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Contact;