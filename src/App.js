import './App.css';
import React, { Component } from 'react';
// import logo from './img/logo.svg';
// import GlobalStyle from './globalStyles.js';
import Header from './Component/header/index.js';
// import Movies from './view/Movies.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="containerHeader">
          <Header />
          {/* <Movies></Movies> */}
        </div>
      </div>
    );
  }
}
export default App;
