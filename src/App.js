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
          <span><a href="https://en.wikipedia.org/wiki/Finnegans_Wake">Finnegans Wake</a> is a novel by James Joyce written in an experimental stream of consciousness style that rejects narrative conventions. This tool allows you to generate a text that mimics both the style and the vocabulary of the novel.</span><br/><br/>
          <span>Write something or paste text in the box below. You can also upload a text file.</span><br/><br/>
          <Formy/>
        </div>
      </div>
    );
  }
}

export default App;
