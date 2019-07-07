import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Card from '../components/card/Card';

export default class Collection extends Component {
  render() {
    return (
      <div>
        <Row className="p-0 m-0">
          {new Array(20).fill(0).map((el, i) => (
            <Col key={i.toString()} className="p-0 m-0" xs={6} md={4} lg={3}>
              <Card />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
