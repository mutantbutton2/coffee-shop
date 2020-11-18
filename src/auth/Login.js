import React, { Component } from "react";
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
      </div>
    )
  }

}
