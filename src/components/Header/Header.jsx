import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/All'>All</NavLink></li>
        </ul>
      </nav>
    );
  }
}
