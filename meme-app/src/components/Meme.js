import React from 'react';
import Upvote from '../images/up.png';
import { Container, Row, Col } from 'react-bootstrap';
import HighScores from './HighScores';
import Link from 'react-router';

const Meme = (props) => {
    let { id, name, src, votes, upVote } = props;

    return (
        <Col lg={4}>
            <Row>
                <Col lg={12}>
                    <div className="MemeHolder">
                        <div className="MemeChild row">
                            <Col lg={4}>
                                <img onClick={() => upVote(id)} className="UpVote" height="40px" src={Upvote} />
                                <span id={'upvote' + id}>{votes}</span>
                            </Col>
                            <Col lg={8}>
                                <img className="MemePhoto" src={src} width="400px" height="400px" />
                            </Col>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div style={{ fontStyle: 'italic', marginTop: '10px', alignItems: 'center' }}>
                        Brought To You By: {name}
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default Meme;