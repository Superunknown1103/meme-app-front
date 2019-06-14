import React, { Component } from 'react';
import './Dropzone.css';
import poo from '../images/poo.png';
import checkmark from '../images/checkmark.png';

export default class Dropzone extends Component {
    constructor(props) {
        super(props)
        //state
        this.state = {
            highlight: false,
            uploadText: 'Drop your meme here!'
        };
        // create Ref
        this.fileInputRef = React.createRef();
        // binding
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    openFileDialog() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    onFilesAdded(e) {
        if (this.props.disabled) return;
        const files = e.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
    }

    onDragOver(e){
        e.preventDefault();
        if (this.props.disabled) return;
        this.setState({
            highlight: true
        })
    }

    onDragLeave(e){
        e.preventDefault();
        this.setState({
            highlight: false
        })
    }

    onDrop(e){
        e.preventDefault();
        if (this.props.disabled) return;
        const files = e.dataTransfer.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
        this.setState({ highlight: false, uploadText: files[0].name });
        console.log(files[0]);
    }

    render() {
        return (
            <div
                className={`Dropzone ${this.state.highlight ? "Highlight" : ""}`}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
                onClick={this.openFileDialog}
                style={{ cursor: this.props.disabled ? "default" : "pointer" }}
            >
                <img
                    alt="Drop icon"
                    className="Icon"
                    src={this.state.uploadText === 'Drop your meme here!' ? poo : checkmark}
                />
                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
                <br />
                <span>{this.state.uploadText}</span>
            </div>
        )
    }
}