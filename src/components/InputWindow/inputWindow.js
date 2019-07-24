import React, { Component } from 'react';
import './inputWindow.css';

import { ResponseSender } from '../../Enum';

class InputWindow extends Component {
    constructor() {
        super();
        this.state = {
            textMessage: ""
        }
    }

    messageSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onNewMessage(this.state.textMessage, ResponseSender.User);
        this.setState({ textMessage: "" });
    }
    onTextChange = (event) => {
        event.preventDefault();
        this.setState({ textMessage: event.target.value })
    }

    render() {
        return (
            <div className="inputWindow" >
                <div className="textBox">
                    <form action="" onSubmit={this.messageSubmitHandler}>
                        <input type="text" className="textInput"
                            value={this.state.textMessage}
                            onChange={this.onTextChange}
                            id="transcript" placeholder="Type your message here..." />
                    </form>
                </div>
                <img className="speechBox" alt="" src="assets/images/speech.jpg" />
            </div>
        );
    }

}

export default InputWindow;
