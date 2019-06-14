import React from 'react';

const Meme = (props) => {
    let { name, src, votes } = props;

    return (
        <div>{name}</div>
    )
}

export default Meme;