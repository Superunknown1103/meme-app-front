import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import  h  from '../helpers/helper'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: 'test'
    };

  }

  componentDidMount() {
    if (h.user) {
      this.setState({
        email: h.user
      })
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let data = new FormData();
    data.append('user[name]', this.state.name);
    data.append('user[pass]', this.state.password);
    data.append('user[email]', this.state.email);
    fetch(h.server + '/authenticate', {
      method: "POST",
      headers: {
        'Accepts': 'application/json',
      },
      body: data,
    }).then(resp => resp.json())
      .then(data => {
          h.set_user(data.u_id);
          h.set_token(data.token)
          window.location = window.location.origin + '/vote'
      })
      .catch(err => alert(err))
  }

  render() {
    return (
      <div className="login">
        <h2>Log In</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <label>Email</label>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <label>Password</label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}