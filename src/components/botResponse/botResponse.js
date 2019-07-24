import React, { Component } from 'react';
import './botResponse.css';

class BotResponse extends Component {

    render() {
        return (
            <div className="botResponse">
                <img className="botIcon" alt="" src="assets/images/3dbot.jpg" />
                {this.props.botResponse}
            </div>
        );
    }

}

export default BotResponse;
