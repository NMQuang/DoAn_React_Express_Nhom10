import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

export default class ProductList extends Component {
  render() {
    return (
      <Container>
        <p>This is ProductList</p>
        <Link to={{ pathname: "/product/1", id: 1, }}>Product 1</Link> <br />
        <Link to={{ pathname: "/product/2", id: 2, }}>Product 2</Link> <br />
        <Link to={{ pathname: "/product/3", id: 3, }}>Product 3</Link>
        <Divider />
        <p style={{display: 'flex', justifyContent: 'flex-end',}}>
          Made with <Icon name="heart" color="red"/> by Quyen Pham Khac
        </p>
      </Container>
    )
  }
}
