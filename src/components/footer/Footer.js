import React, { Component } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Row, Col } from 'reactstrap';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <Row className="footer px-0 mx-0">
        <Col sm={6} className="row justify-content-center">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
        </Col>
        <Col sm={6} className="text-center">© 2019, shop. Powered by Nathapong</Col>
      </Row>
    );
  }
}
