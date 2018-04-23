import React, { Component } from 'react';
import Wine from './Wine';
class TopSaleWine extends Component {
    render() {
        return(
            <div class="col-md-10 col-md-offset-1">
                <div class="row">
                    <Wine/>
                    <Wine/>
                    <Wine/>
                    <Wine/>
                </div>      
                <div class="row">
                    <Wine/>
                    <Wine/>
                    <Wine/>
                    <Wine/>
                </div>
                <div class="row">
                    <Wine/>
                    <Wine/>
                    <Wine/>
                    <Wine/>
                </div>
            </div>
        )
    }
}
export default TopSaleWine;