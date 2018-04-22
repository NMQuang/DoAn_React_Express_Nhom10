import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <p>This is HomePage</p>
        <Link to="/product">Product List</Link>
      </Container>
    );
  }
}
