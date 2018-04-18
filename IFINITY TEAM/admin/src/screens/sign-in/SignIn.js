import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>Let's sign in</h1>
        <Link to="/app">Log In</Link>
      </div>
    )
  }
}
