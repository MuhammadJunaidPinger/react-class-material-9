import React, { Component } from 'react';
import './App.css';
import Router from './Config/Router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{backgroundColor: 'gray'}}>
            THIS IS HEADER
          </div>
          <Router />

          <div style={{backgroundColor: 'gray'}}>
            This is FOOTER
          </div>

          <br />
          <br />
          <br />
        </header>
      </div>
    );
  }
}

export default App;

/*
fetch('https://opentdb.com/api.php?amount=10')
.then(res => res.json())
.then(res => console.log(res))

*/