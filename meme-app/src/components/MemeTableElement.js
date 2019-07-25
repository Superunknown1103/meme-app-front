import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Meme = (props) => {
    let { name, src, votes } = props;

    return (
        <tr>
            <td>
                <img className="MemePhoto" src={src} width="400px" height="400px" />
            </td>
            <td>
                {votes}
            </td>
            <td>
                {name}
            </td>
        </tr>
    )
}

export default Meme;