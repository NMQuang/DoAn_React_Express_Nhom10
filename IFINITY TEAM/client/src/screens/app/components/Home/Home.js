import React, { Component } from 'react';
import Slide from './Slide';
import SaleFood from './SaleFood';
class Home extends Component {
    render() {
        return(
            <div class="container" style={{ minHeight: 500}}>
                <Slide/>
                <hr class="hr-text" data-content="Món ngon giảm giá"/>
                <SaleFood/>
                <hr class="hr-text" data-content="Đặt hàng nhiều trong tuần"/>
            </div>
        )
    }
}
export default Home