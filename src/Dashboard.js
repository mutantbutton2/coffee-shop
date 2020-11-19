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
            <h5>{this.props.loggedInStatus}</h5>
          </div>
        </div>
      );
    } else {
      return <Redirect to='/' />
    }
  }
}
