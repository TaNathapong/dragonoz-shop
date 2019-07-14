import React, { Component } from 'react';

import { collectionType } from '../../const/CollectionType';

export default class SidebarCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionType: collectionType
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.collectionType.map((el, i) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
    );
  }
}
