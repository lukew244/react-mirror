import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './weather.es6.jsx'
import Clock from './clock.es6.jsx';
import TubeStatus from './tubeStatus.es6.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="right-pane">
          <Clock />
          <Weather />
          <TubeStatus />
        </div>
      </div>
    );
  }
}

export default App;
