import React, { Component } from 'react';
import Dropzone from './Dropzone';

export default class Uploader extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('The value is: ' + this.input);
    }

    render() {
        return (
            <div>
                <h1>Submit a meme!</h1>
                <form onSubmit={this.handleSubmit}>
                    <Dropzone onFilesAdded={console.log}/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}