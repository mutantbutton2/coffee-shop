import React, { Component } from 'react';
import './Home.css';
import Login from "./auth/Login";

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
          <h2>
            <code>Coffee shop</code>
          </h2>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    );
  }
}


