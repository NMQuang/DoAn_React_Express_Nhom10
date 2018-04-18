import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

import ProductList from './ProductList';
import Dashboard from './Dashboard';
import OrderList from './OrderList';
import BrandList from './BrandList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/app">Home</Link> / 
        <Link to="/app/product">Product</Link> / 
        <Link to="/app/order">Product</Link> / 
        <Link to="/app/brand">Brand</Link>
        <Switch>
          <Route exact path="/app" component={Dashboard} />
          <Route path="/app/product" component={ProductList} />
          <Route path="/app/order" component={OrderList} />
          <Route path="/app/brand" component={BrandList} />
        </Switch>
      </div>
    )
  }
}
