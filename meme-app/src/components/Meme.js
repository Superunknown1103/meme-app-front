import React from 'react';
import Upvote from '../images/up.png';
import { Container, Row, Col } from 'react-bootstrap';
import HighScores from './HighScores';
import Link from 'react-router';

const Meme = (props) => {
    let { name, src, votes } = props;

    return (
        <div>
            <Container>
                <Row>
                    <div className="MemeHolder">
                        <div className="MemeChild">
                            <img className="UpVote" width="50px" height="50px" src={Upvote} />
                            <img className="MemePhoto" src={src} width="400px" height="400px" />
                        </div>
                    </div>
                </Row>
                <Row style={{ fontStyle: 'italic', marginTop: '10px', alignItems: 'center' }}>
                    <Col sm={12}>
                        Brought To You By: {name}
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}

export default Meme;