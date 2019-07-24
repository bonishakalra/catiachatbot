import React, { Component } from 'react';
import './userExpression.css';

class UserExpression extends Component {

    render() {
        return (
            <div className="userExpression">
                {this.props.userExpression}
                <img className="userIcon" alt="" src="assets/images/User.jpg" />
            </div>
        );
    }

}

export default UserExpression;
