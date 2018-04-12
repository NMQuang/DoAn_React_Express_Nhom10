import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from 'react-loadable';

import Home from './Home';
import Loading from './Loading';

const AsyncDynamicPAge = loadable({
  loader: () => import('./DynamicPage' /* webpackChunkName: 'DynamicPage' */),
  loading: Loading,
})

const AsyncNoMatch = loadable({
  loader: () => import('./NoMatch' /* webpackChunkName: 'NoMatch' */),
  loading: Loading,
})


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;