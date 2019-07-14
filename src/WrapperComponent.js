import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import CollectionBar from './components/collectionBar/CollectionBar';
import SidebarMenu from './components/sidebarMenu/SidebarMenu';
import SidebarCart from './components/sidebarCart/SidebarCart';

import './App.css';

export default class WrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      cartOpen: false
    };
    this.onSetCartOpen = this.onSetCartOpen.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentDidMount() {
    this.fixNavToTop();
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  onSetCartOpen(open) {
    this.setState({ cartOpen: open });
  }

  fixNavToTop() {
    var collection = document.getElementById('collection');
    var stickyCollection = collection.offsetTop;
    window.onscroll = function() {
      if (window.pageYOffset >= stickyCollection) {
        collection.classList.add('sticky-collection');
      } else {
        collection.classList.remove('sticky-collection');
      }
    };
  }

  render() {
    let { sidebarOpen, cartOpen } = this.state;
    let { children, location } = this.props;
    let sidebar = { background: 'white', height: '100%' ,width:"15rem", zIndex: 999 };
    let path = location.pathname;
    return (
      <div>
        <Sidebar
          sidebar={<SidebarMenu />}
          open={sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: sidebar }}
        />
        <Sidebar
          sidebar={<SidebarCart />}
          pullRight={true}
          open={cartOpen}
          onSetOpen={this.onSetCartOpen}
          styles={{ sidebar: sidebar }}
        />
        <div className="main">
          <NavBar path={path} onSetSidebarOpen={this.onSetSidebarOpen} onSetCartOpen={this.onSetCartOpen} />
          <CollectionBar />
          {children}
          <div
            className="fb-customerchat"
            page_id="388041435159823"
            logged_in_greeting="มีอะไรให้รับใช้ครับ"
            logged_out_greeting="มีอะไรให้รับใช้ครับ"
          />
          <Footer />
        </div>
      </div>
    );
  }
}
