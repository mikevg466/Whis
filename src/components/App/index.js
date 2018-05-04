import React, { Component } from 'react';
import { Logo } from '../Icons';
import Calendar from '../Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <Logo />
          </div>
        </header>
        <div>
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
