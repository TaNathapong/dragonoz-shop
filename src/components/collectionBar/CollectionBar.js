import React, { Component } from 'react';
import './collectionBar.css';

import { collectionType } from '../../const/CollectionType';

export default class CollectionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionType: collectionType
    };
  }

  render() {
    let { collectionType } = this.state;
    return (
      <div id="collection" className="collection">
        {collectionType &&
          collectionType.map((el, i) => (
            <div key={i.toString()} className="collection-button">
              <a href={`collections/${el}`}>{el.toUpperCase()}</a>
            </div>
          ))}
      </div>
    );
  }
}
