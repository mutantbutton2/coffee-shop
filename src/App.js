import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard";
import Home from "./Home";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(data) {
    localStorage.setItem("user", JSON.stringify(data.user));
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout() {
    localStorage.removeItem("user");
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} 
                   render={props => (<Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)}/>
            <Route exact path={"/dashboard"}
                   render={props => (<Dashboard {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


