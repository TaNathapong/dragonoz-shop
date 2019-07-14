import React, { Component } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { collectionType } from '../../const/CollectionType';
import Logo from '../../assets/logo/logo.png';
import './sidebarMenu.css';

export default class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionType: collectionType
    };
  }

  render() {
    return (
      <div className="menu">
        <div className="menu-top">
          <img alt="logo" className="menu-logo" src={Logo} />
        </div>
        <div className="menu-list">
          <ul>
            {this.state.collectionType.map((el, i) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
        <div className="menu-footer">
          <ul>
            <li>Log in</li>
            <li>Create account</li>
            <li>Search</li>
          </ul>
          <div className="menu-social">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
      </div>
    );
  }
}
