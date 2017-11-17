import React, { Component } from 'react';

import h from './header.css';

import logo from '../../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className={h.header+' test'}>
        <img src={logo} alt=""/>
        <h1 className={h.title}>hello,React</h1>
        <div className={'line'}></div>
      </div>
    );
  }
}

export default Header;
