import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navigation } from './styles.js';
// import { logo } from '.../img/logo.svg';
import Home from '../../view/home/index.js';
import Movies from '../../view/Movie/index.js';
class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation>
          {/* <img src={logo} alt="" /> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
          </ul>
        </Navigation>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default Header;
