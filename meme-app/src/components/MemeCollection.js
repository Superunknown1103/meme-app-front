import React from 'react';
import Meme from './Meme';

export default class MemeCollection extends React.Component {
    constructor() {
        super()
        this.state = {
            memes: []
        }
    }

    render() {
        return (
            <div>
                <div>To do: render images that I can upvote</div>
                <Meme name="test" src="" votes="" />
            </div>
        )
    }
}