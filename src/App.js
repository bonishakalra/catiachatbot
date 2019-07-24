import React, { Component } from 'react';
import './App.css';

import ChatComp from './components/chatComp/chatComp';
import Login from './components/login/login';
import { getUserLogin } from './Services/Services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUserLogin: false,
      user: ""
    }
  }

  componentWillMount() {
    // getUserLogin()
  }

  getUserLogin = (iData) => {
    this.setState({ isUserLogin: iData.isAuthenticated, user: iData.user });
  }

  renderAuthComponent = () => {
    if (this.state.isUserLogin) {
      return <ChatComp user={this.state.user} />
    } else {
      return <Login getUserLogin={this.getUserLogin} />
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderAuthComponent()}
      </div>
    );
  }

}

export default App;
