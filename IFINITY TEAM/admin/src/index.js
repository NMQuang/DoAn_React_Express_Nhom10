import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import 'antd/dist/antd.css'; 
import './styles/global/index.css';
import './styles/app/app.css';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
