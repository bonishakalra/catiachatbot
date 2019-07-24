import React, { Component } from 'react';
import { getUserLogin } from '../../Services/Services';

import './login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        this.loginSubmitHandler = this.loginSubmitHandler.bind(this);
        this.setLoginUsernameValue = this.setLoginUsernameValue.bind(this);
        this.setLoginPasswordValue = this.setLoginPasswordValue.bind(this);
    }

    loginSubmitHandler(event) {
        event.preventDefault();
        let self = this;
        getUserLogin(this.state, function (iData) {
            self.props.getUserLogin(iData);
        });
        this.setState({ username: "", password: "" })
    }
    setLoginUsernameValue(event) {
        event.preventDefault();
        this.setState({ username: event.target.value })
    }
    setLoginPasswordValue(event) {
        event.preventDefault();
        this.setState({ password: event.target.value })
    }
    render() {
        return (
            <div className="login">
                <div className="inner">
                    <div className="dddxp-logo-container"><span className="dddxp-logo"></span></div>
                    <div className="loginform ">
                        <form onSubmit={this.loginSubmitHandler}>
                            <input className="userinput"
                                value={this.state.username}
                                onChange={this.setLoginUsernameValue}
                                name="username" type="username" placeholder="username" required />
                            <br />
                            <input className="userpassward"
                                value={this.state.password}
                                onChange={this.setLoginPasswordValue}
                                name="password" type="password" placeholder="password" required />
                            <br />
                            <button className="loginbutton" >Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
