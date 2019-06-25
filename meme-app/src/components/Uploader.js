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
            img: e[0],
            disabled: true
        })
    }

    base64encoder = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // get File Object
        var fileObject = this.state.img
        let data = new FormData();
        data.append('meme[link]', fileObject);
        data.append('meme[user_id]', 1);
        data.append('meme[votes]', 0);
        fetch('http://localhost:3000/api/v1/memes', {
            method: 'POST',
            headers: {
                'Accepts': "application/json"
            },
            body: data,
        })
            .then(response => response.json())
            .then(data => console.log(JSON.stringify(data)))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <h1>Submit a meme!</h1>
                <form encType="multipart/form-data" method="post" onSubmit={event => this.handleSubmit(event)}>
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