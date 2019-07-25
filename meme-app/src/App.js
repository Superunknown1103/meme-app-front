import React from 'react';
import './App.css';
import Uploader from './components/Uploader';
import MemeCollection from './components/MemeCollection';
import HighScores from './components/HighScores';
import Login from './components/Login';
import SignUp from './components/Signup';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: true,
    }
  }

  render() {
    return (
      <div className="App">
         <h2> // Flatiron Meme Department </h2>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/vote" component={MemeCollection} />
          <Route path="/upload" component={Uploader} />
          <Route path="/highscores" component={HighScores} />
        </Switch>
      </div>
    );
  }
}

