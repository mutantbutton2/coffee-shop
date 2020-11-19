import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Dashboard extends Component {

  render() {
    const loggedIn = this.props.loggedInStatus === "LOGGED_IN";
    if (loggedIn) {
      return (
        <div>
          <div>
            <h3>COMING SOON</h3>
            <button onClick={this.props.handleLogout}>Log out</button>
          </div>
        </div>
      );
    } else {
      return <Redirect to='/' />
    }
  }
}
