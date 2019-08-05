import React from 'react';
import './App.css';
import Uploader from './components/Uploader';
import MemeCollection from './components/MemeCollection';
import HighScores from './components/HighScores';
import Login from './components/Login';
import SignUp from './components/Signup';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from './helpers/PrivateRoute';
import h from './helpers/helper'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/vote" component={MemeCollection} />
          <PrivateRoute path="/upload" component={Uploader} />
          <Route path="/highscores" component={HighScores} />
        </Switch>
      </div>
    );
  }
}

