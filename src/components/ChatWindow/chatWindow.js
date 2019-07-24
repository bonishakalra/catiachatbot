import React, { Component } from 'react';
import './chatWindow.css';

class ChatWindow extends Component {
    render() {
        return (
            <div className="chatWindow" id="botChat" >
                {this.props.allMessages}
            </div>
        );
    }

}

export default ChatWindow;
