import React, { Component } from 'react';
import './App.css';
import Formy from './form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo">💬 👉🚶💃 🏛</div>
          <h2>Finnegans Wake-ify</h2>
          <h3>Programming A to Z, Week 1</h3>
        </div>
        <div className="App-intro">
          <span>Write something or paste text in the box below. You can also upload a text file.</span><br/><br/>
          <Formy/>
        </div>
      </div>
    );
  }
}

export default App;
