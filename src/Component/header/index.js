import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navigation, Figure } from './styles.js';
import Logo from '../../img/logo.svg';
import Home from '../../view/home/index.js';
import Movies from '../../view/Movie/index.js';
class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation>
          <Figure>
            <img src={Logo} alt="" />
          </Figure>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Movies">Movies and Series</Link>
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
