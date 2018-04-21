import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from 'react-loadable';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import Home from '../components/Home';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

class MainApp extends React.Component {
  render() {
    const { match, location } = this.props;
    return (
      <div>
        <Header />
           <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={ProductList} />
                <Route exact path="/product/:productId" component={ProductDetail} />
              </Switch>
            </div>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default MainApp;