import React, { Component } from 'react';

import ChatWindow from '../ChatWindow/chatWindow';
import InputWindow from '../InputWindow/inputWindow';
import { ResponseSender } from '../../Enum';

import UserExpression from '../userExpression/userExpression';
import BotResponse from '../botResponse/botResponse';

import { getNLPResponse } from '../../Services/Services';
import DataTable from '../dataTable/dataTable';

class ChatComp extends Component {
    constructor() {
        super();
        this.state = {
            messages: []
        }
    }
    componentWillMount() {
        this.onNewMessage("Welcome to 3DExperience Platform", ResponseSender.Bot);
    }

    onNewMessageFromUser = (iMessage) => {
        let self = this;
        getNLPResponse(iMessage, this.props.user, function (iType, iBotReply, iResponseData) {
            // let botResponseMessage = iResponseData.fulfillment.value;
            //self.onNewMessage(botResponseMessage, ResponseSender.Bot);
            let botResponseMessage = iBotReply;
            this.onNewMessage(botResponseMessage, ResponseSender.Bot);

            if (iResponseData != undefined && iResponseData.length > 0) {
                let newdatatable = <DataTable key={this.state.messages.length} data={iResponseData} dataType={iType} />
                this.setState({ messages: [...this.state.messages, newdatatable] });
            }
            // else {
            //     let regretMessage =  <BotResponse botResponse={"Sorry! no data has been found"} />
            //     this.setState({ messages: [...this.state.messages, regretMessage] });
            // }
        }.bind(this));
    }

    onNewMessage = (iMessage, iType) => {
        let newMessage = null;
        if (iType === ResponseSender.Bot) {
            newMessage = <BotResponse key={this.state.messages.length} botResponse={iMessage} />
        } else if (iType === ResponseSender.User) {
            newMessage = <UserExpression key={this.state.messages.length} userExpression={iMessage} />
            this.onNewMessageFromUser(iMessage);
        }
        if (newMessage !== null) {
            this.setState({ messages: [...this.state.messages, newMessage] });
        }
    }

    render() {
        return (
            <div>
                <ChatWindow allMessages={this.state.messages} />
                <InputWindow onNewMessage={this.onNewMessage} />
            </div>
        );
    }

}

export default ChatComp;
