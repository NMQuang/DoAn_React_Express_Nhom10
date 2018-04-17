import { AppContainer } from 'react-hot-loader';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import MainApp from './containers/app';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router> 
    </AppContainer>,
    document.getElementById('root')
  );

render(MainApp);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./containers/app', () => render(require('./containers/app').default));