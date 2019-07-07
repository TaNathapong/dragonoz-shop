import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import WrapperComponent from './WrapperComponent';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Register from './pages/Register';

export default class route extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={false}>
        <Switch>
          <WrapperComponent>
            <Route path="/" exact component={Main} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/collections/:collection" exact component={Collection} />
            <Route path="/account/register" exact component={Register} />
          </WrapperComponent>
        </Switch>
      </BrowserRouter>
    );
  }
}
