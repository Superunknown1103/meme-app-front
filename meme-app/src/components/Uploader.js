import React, { Component } from 'react';
import Dropzone from './Dropzone';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            disabled: false
        }
    }

    handleFileUpload = (e) => {
        this.setState({
            img: e,
            disabled: true
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.img)
    }

    render() {
        return (
            <div>
                <h1>Submit a meme!</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <Dropzone disabled={this.state.disabled} onFilesAdded={(e) => this.handleFileUpload(e)} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <Link to="/vote">Vote on memes!</Link>
            </div>
        );
    }
}