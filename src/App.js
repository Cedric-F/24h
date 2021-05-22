import React, { Component } from 'react'
import Header from './Header';
import Landing from './Landing';
import About from './About';
import { Route, Link } from 'react-router-dom';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/About" component={About} />
      </div>
    );
  }
}
