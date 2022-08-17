import React, { Component } from 'react';
import { BrowserRouter, Link, Routes } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    );
  }
}
export default Header;
