import React, { Component } from 'react';
import Slide from './Slide';
import SaleWine from './SaleWine';
import TopSaleWine from './TopSaleWine';

class Home extends Component {
    render() {
        return(
            <div class="container" style={{ minHeight: 500}}>
                <Slide/>
                <hr class="hr-text" data-content="Món ngon giảm giá"/>
                <SaleWine/>
                <hr class="hr-text" data-content="Đặt hàng nhiều trong tuần"/>
                <TopSaleWine/>
            </div>
        )
    }
}
export default Home