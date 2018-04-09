import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
        <button
          type="button"
          onClick={() => alert('Default notification')}
        >
          Default notification
        </button>
        <button
          type="button"
          onClick={() => alert('Success notification')}
        >
          Success notification
        </button>
        <button
          type="button"
          onClick={() => alert('Error notification')}
        >
          Error notification
        </button>
        <button
          type="button"
          onClick={() => alert('Notification with timer')}
        >
           Notification with timer
        </button>
      </div>
    );
  }
}

export default App;
