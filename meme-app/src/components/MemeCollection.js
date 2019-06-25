import React from 'react';
import Meme from './Meme';
import { Link } from 'react-router-dom';

export default class MemeCollection extends React.Component {
    constructor() {
        super()
        this.state = {
            memes: []
        }
    }

    componentDidMount() {
        let URL = "http://localhost:3000/api/v1/memes/";
        fetch(URL)
            .then(resp => resp.json())
            .then(memes => this.makeMemeComponents(memes))
    }

    makeMemeComponents = (memes) => {
        console.log(memes)
        this.setState({
            memes: memes.map(m => <Meme src={m.src} votes={m.votes} />)
        })
    }

    render() {
        return (
            <div>
                <Link style={{ textDecoration: 'underline', paddingBottom: '20px' }} to="/highscores">
                    View High Scores
                </Link>
                <br />
                {this.state.memes}
            </div>
        )
    }
}