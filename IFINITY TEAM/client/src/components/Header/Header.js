import React, { Component } from 'react';
import { Container, Input, Icon, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

export default class Header extends Component {
  render() {
    return <div className={styles.header} />;
  }
}
