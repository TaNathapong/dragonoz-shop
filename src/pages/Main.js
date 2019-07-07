import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Card from '../components/card/Card';
import Subscribe from '../components/subscribe/Subscribe';

import './style.css';
import '../components/navBar/navbar.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row className="p-0 m-0">
          {new Array(20)
            .fill(0)
            .slice(0, 12)
            .map((el, i) => (
              <Col key={i.toString()} className="p-0 m-0" xs={6} md={4} lg={3}>
                <Card />
              </Col>
            ))}
        </Row>
        <Subscribe />
      </div>
    );
  }
}
