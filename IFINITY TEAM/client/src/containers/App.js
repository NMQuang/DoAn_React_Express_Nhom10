import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from 'react-loadable';

import MainApp from '../screens/app';
import NoMatch from '../screens/NoMatch';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={MainApp} />
          <Route exact path="/404" component={NoMatch} />
        </div>
      </Router>
    );
  }
}

export default App;