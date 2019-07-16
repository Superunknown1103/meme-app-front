import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import $ from 'jquery';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.server = "http://localhost:3000/";
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
    data.append('user[name]', this.state.email);
    data.append('user[pass]', this.state.password);
    fetch(this.server + 'api/v1/users/', {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Accepts': 'application/json',
      },
      body: data,
    }).then(resp => {
      console.log(resp)
    });
    // sessionStorage.setItem('user', JSON.stringify({
    //   'access-token': jqXHR.getResponseHeader('access-token'),
    //   client: jqXHR.getResponseHeader('client'),
    //   uid: response.data.uid
    // }));
    // this.props.history.push('/vote')
    // .catch((err) => alert(err));
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