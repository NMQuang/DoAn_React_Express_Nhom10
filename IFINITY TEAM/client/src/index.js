import { AppContainer } from 'react-hot-loader';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import ReactDOM from 'react-dom';

import MainApp from './containers';
import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk, reduxLogger)
);

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Component />
        </Router>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );

render(MainApp);

// Webpack Hot Module Replacement API
if (module.hot)
  module.hot.accept('./containers/app', () =>
    render(require('./containers/app').default)
  );
