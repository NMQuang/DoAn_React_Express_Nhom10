import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home'
import NoMatch from '../../404';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/app" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
