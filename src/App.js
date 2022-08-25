import './App.css';
import React, { Component } from 'react';
import Header from './Component/header/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="containerHeader">
          <Header />
        </div>
      </div>
    );
  }
}
export default App;
