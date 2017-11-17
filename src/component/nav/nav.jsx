import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import n from './nav.css';

class Nav extends Component {
  render() {
    return (
      <div className={n.nav}>
        <ul>
          <li><NavLink activeClassName={n.active} to="/page1">page1</NavLink></li>
          <li><NavLink activeClassName={n.active} to="/page2">page2</NavLink></li>
          <li><NavLink activeClassName={n.active} to="/page3">page3</NavLink></li>
          <li><NavLink activeClassName={n.active} to="/page4">page4</NavLink></li>
          <li><NavLink activeClassName={n.active} to="/page5">page5</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
