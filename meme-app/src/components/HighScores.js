import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

export default class HighScores extends Component {
    render() {
        return (
            <div style={{width: '90vw', margin: '0 auto'}}>
               <h2>High Scores</h2>
                <Table striped bordered hover>
                    <tr>
                        <th>User</th>
                        <th>Votes</th>
                        <th>Best Meme</th>
                    </tr>
                </Table>
            </div>
        )
    }
}