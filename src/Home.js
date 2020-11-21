import React, { Component } from 'react';
import './Home.css';
import Login from "./auth/Login";
import logo from "./logo.png"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="App-header">
        <img class="fit" src={logo} />
        <h2>
          <code>coffee_shop();</code>
        </h2>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    );
  }
}


