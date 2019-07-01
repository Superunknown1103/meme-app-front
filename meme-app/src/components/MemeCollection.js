import React from 'react';
import Meme from './Meme';
import { Link } from 'react-router-dom';

export default class MemeCollection extends React.Component {
    constructor() {
        super()
        this.state = {
            memes: []
        }

        this.server = "http://localhost:3000/api/v1/";
    }

    componentDidMount() {
        let URL = this.server + "memes/";
        fetch(URL)
            .then(resp => resp.json())
            .then(memes => this.makeMemeComponents(memes))
    }

    upVote = (id) => {
        debugger;
        fetch(this.server + "memes/upvote/" + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id)
        })
    }

    makeMemeComponents = (memes) => {
        this.setState({
            memes: memes.map(m => <Meme id={m.meme.id} upVote={this.upVote} src={m.link} votes={m.meme.votes} name={m.meme.user_id} />)
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