import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

import ProductList from '../Product';
import Dashboard from '../Dashboard';
import OrderList from '../Order';
import BrandList from '../Brand';
import CategoryList from '../Category';
import AccountList from '../Account';

import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider } = Layout;

const logoStyle = {
  height: 32,
  backgroundColor: 'rgba(255,255,255,.2)',
  margin: 16,
}

const siderStyle = {
  height: '100vh',
  position: 'fixed',
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    }
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={siderStyle}
        >
          <div style={logoStyle} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/app">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/app/account">
                <Icon type="user" />
                <span>Account</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/app/category">
                <Icon type="appstore-o" />
                <span>Category</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/app/product">
                <Icon type="gift" />
                <span>Product</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/app/brand">
                <Icon type="shop" />
                <span>Brand</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/app/order">
                <Icon type="shopping-cart" />
                <span>Order</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft:  this.state.collapsed ? 80 : 200}} className="main-layout">
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.onCollapse}
            />
            <Icon type="logout"
              className="trigger"
              style={{ float: 'right' }}
            />
          </Header>
          <div style={{ padding: 16, minHeight: 600, }}>
            <Switch>
              <Route exact path="/app" component={Dashboard} />
              <Route path="/app/account" component={AccountList} />
              <Route path="/app/product" component={ProductList} />
              <Route path="/app/order" component={OrderList} />
              <Route path="/app/category" component={CategoryList} />
              <Route path="/app/brand" component={BrandList} />
            </Switch>
          </div>
          <Footer style={{ textAlign: 'center' }}>
            Infinity Team ©2018 Made with love <Icon type="heart" style={{ color: 'red' }} />
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home;