import React, { Component } from 'react';
import WineDetail from './WineDetail';
import SaleWine from '../Home/SaleWine';
class Wine extends Component {
    render() {
        return(
            <div className="container">
                <div className="col-lg-10 col-lg-offset-1">
                    <WineDetail/>
                </div>
                <h4>Món ăn đặt hàng nhiều trong tuần</h4>
                <SaleWine/>
            </div>
        )
    }
}
export default Wine;