import React, { Component } from 'react';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

export default class ProductDetail extends Component {
  render() {
    console.log(this.props);
    const { id } = this.props.location;
    return (
      <Container>
        {id ? <p>This is ProductDetail #{id}</p> : (<p></p>) }
        <Divider />
        <p style={{display: 'flex', justifyContent: 'flex-end',}}>
          Made with <Icon name="heart" color="red"/> by Quyen Pham Khac
        </p>
      </Container>
    )
  }
}
