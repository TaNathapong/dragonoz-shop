import React, { Component } from 'react';
import { Row } from 'reactstrap';
import './subscibe.css';

export default class Subscribe extends Component {
  render() {
    return (
      <Row className="subscribe">
        <input className="subscribe-input" />
        <button className="subscribe-button">Subscribe</button>
      </Row>
    );
  }
}
