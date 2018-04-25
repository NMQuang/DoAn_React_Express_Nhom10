import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import loadable from 'react-loadable';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import Home from '../components/Home';
import Agency from '../components/Agency';
import Customer from '../components/Customer';
import Register from '../components/Register';
import ChangePassword from '../components/ChangePassword';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Order from '../components/Order';
import OrderHistory from '../components/OrderHistory';
import Cart from '../components/Cart';
import Wine from '../components/Wine';
class MainApp extends React.Component {
  render() {
    const {match, location} = this.props;
    return (
      <div>
        <Header/>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/product" component={ProductList}/>
              <Route exact path="/product/:productId" component={ProductDetail}/>
              <Route exact path="/agency" component={Agency}/>
              <Route exact path="/customer" component={Customer}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/changepw" component={ChangePassword}/>
              < Route exact path="/order" component={Order}/>
              <Route exact path="/orderhistory" component={OrderHistory}/>
              < Route exact path="/cart" component={Cart}/>
              < Route exact path="/wine" component={Wine}/>
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default MainApp;
