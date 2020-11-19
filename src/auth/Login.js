import React, { Component } from "react";
import axios from 'axios';
import './Login.css';


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      login_errors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    axios.post("http://localhost:4000/login", {
      username: this.state.username,
      password: this.state.password
    },
    {
      withCredentials: true
    }).then(response => {
      console.log("login res", response.data.user)
      if (response.data.user) {
        this.props.handleSuccessfulAuth(response.data);
      } else {
        this.setState({login_error: response.data.error});
      }
    }).catch(error => {
      console.log("login error", error)
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
          <button type="submit">Login</button>
        </form>
        <h3>{this.state.login_error}</h3>
      </div>
    )
  }

}
