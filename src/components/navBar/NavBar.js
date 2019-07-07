import React, { Component } from 'react';
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/logo/logo.png';
import './navbar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { path, onSetSidebarOpen, onSetCartOpen } = this.props;
    return (
      <div className={path === '/' ? 'nav' : 'nav-no-logo'}>
        <FaBars className="nav-icon" onClick={() => onSetSidebarOpen(true)} />
        {path !== '/' && <img src={Logo} className="nav-logo" alt="logo" />}
        <span>
          <FaSearch className="nav-icon" onClick={() => null} />
          <FaShoppingCart className="nav-icon" onClick={() => onSetCartOpen(true)} />
        </span>
      </div>
    );
  }
}
