import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import MemeTableElement from './MemeTableElement';
import h from '../helpers/helper';
import { Link } from 'react-router-dom';

export default class HighScores extends Component {
    constructor() {
        super()
        this.state = {
            memes: []
        }
    }

    componentDidMount() {
        let URL = h.server + "api/v1/memes?sort=true";
        fetch(URL)
            .then(resp => resp.json())
            .then(memes => this.makeMemeComponents(memes))
    }

    makeMemeComponents = (memes) => {
        this.setState({
            memes: memes.map(m => <MemeTableElement name={m.name} id={m.meme.id} src={m.link} votes={m.meme.votes} />)
        })
    }

    render() {
        return (
            <div style={{ width: '90vw', margin: '0 auto' }}>
                <h2>High Scores</h2>
                <Link style={{ textDecoration: 'underline', paddingBottom: '20px' }} to="/vote">
                    To Vote Page
                </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Meme</th>
                            <th>Votes</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.state.memes}
                    </tbody>
                </Table>
            </div>
        )
    }
}