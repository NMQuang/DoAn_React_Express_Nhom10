import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'; 

import MainApp from '../screens/app';

import NoMatch from '../screens/404';
import SignIn from '../screens/sign-in';
import SignUp from '../screens/sign-up';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/"  component={SignIn}/>
          <Route path="/app" component={MainApp} />
          <Route path="/signup" component={SignUp} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    );
  }
}

export default App;