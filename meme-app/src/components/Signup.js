import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import h from '../helpers/helper'

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            name: ""
        };
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
        if (this.state.password === this.state.confirmPassword) {
            data.append('user[name]', this.state.name);
            data.append('user[password]', this.state.password);
            data.append('user[email]', this.state.email);
            fetch(h.server + 'api/v1/users', {
                method: "POST",
                headers: {
                    'Accepts': 'application/json',
                },
                body: data,
            }).then(resp => resp.json())
                .then(data => {
                    // debugger;
                    // h.set_user(data.u_id);
                    // h.set_token(data.token)
                    // window.location = window.location.origin + '/vote'
                    console.log(data)
                })
                .catch(err => alert(err))
        } else {
            alert('passwords do not match')
        }
    }

    redirectToLogIn = () => {
        window.location = window.location.origin + '/login'
    }

    render() {
        return (
            <div className="login">
                <h2>Sign Up</h2>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="name" bsSize="large">
                        <label>Username</label>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
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
                    <FormGroup controlId="confirmPassword" bsSize="large">
                        <label>Confirm Password</label>
                        <FormControl
                            value={this.state.confirmPassword}
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
                        Create Account
          </Button>
          <Button
            block
            bsSize="small"
            variant="info"
            onClick={() => { this.redirectToLogIn()}}
          >
            Back To Login
          </Button>
                </form>
            </div>
        );
    }
}