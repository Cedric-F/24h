import React, { Component } from 'react'
import Header from './Header';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
