import React, { Component } from 'react';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

export default class ProductDetail extends Component {
  render() {
    console.log(this.props);
    const { id } = this.props.location;
    return (
      <Container>{id ? <p>This is ProductDetail #{id}</p> : <p />}</Container>
    );
  }
}
