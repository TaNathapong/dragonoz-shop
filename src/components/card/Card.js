import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { height: null };
  }

  componentDidMount() {
    const height = this.imgElement.clientWidth;
    this.setState({ height });
  }

  render() {
    // var { item } = this.props;
    var item = { name: 'test', price: 1999, picture: require('../../assets/image/wallpaper.jpg') };
    return (
      <div style={{ height: this.state.height * (3 / 4) }}>
        <img src={item.picture} className="card-pic" alt={item.name} ref={img => (this.imgElement = img)} />
        <div className="card-detail" onClick={null}>
          <h3 className="card-text">{item.name}</h3>
          <h6 className="card-text">{item.price.toLocaleString()} ฿</h6>
        </div>
      </div>
    );
  }
}
