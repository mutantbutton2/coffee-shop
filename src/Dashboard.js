import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Dashboard extends Component {

  render() {
    const loggedIn = this.props.checkLoggedIn();
    if (loggedIn) {
      return (
        <div>
          <button onClick={this.props.handleLogout}>Log out</button>
        </div>
      );
    } else {
      return <Redirect to='/' />
    }
  }
}
