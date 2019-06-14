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

    render() {
        return (
            <div>
                <Link style={{textDecoration: 'underline', paddingBottom: '20px' }} to="/highscores">View High Scores</Link>
                <br />
                <Meme
                 name="test" 
                 src="http://www.quickmeme.com/img/94/940d9eb9c57d1adad412682cd2e94e1fee75ac0854cca8e59eb1d011158fd61f.jpg" 
                 votes="5"
                  />
            </div>
        )
    }
}