import React, { Component } from 'react';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

const NoMatch = ({ children }) => {
  return (
    <Container>
      <p>404 not found !</p>
      <Divider />
      <p style={{display: 'flex', justifyContent: 'flex-end',}}>
        Made with <Icon name="heart" color="red"/> by Quyen Pham Khac
      </p>
    </Container>
  )
}
export default NoMatch;