import React, { Component } from 'react';
import SlideFood from './SlideFood';

class SaleFood extends Component {
    render() {
        return(
            <div>  
                <div class="row">
                    <div class="col-md-12">
                        <div id="Carousel" class="carousel my-carousel slide carousel-fade">
                            <ol class="carousel-indicators my-carousel-indicators">
                                <li data-target="#Carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#Carousel" data-slide-to="1"></li>
                                <li data-target="#Carousel" data-slide-to="2"></li>
                            </ol>
                            
                            <div class="carousel-inner">
                                <div class="item active">
                                    <div class="row">
                                        <SlideFood/>
                                        <SlideFood/>
                                        <SlideFood/>
                                        <SlideFood/>
                                    </div>    
                                </div> 
                                <div class="item">
                                    <div class="row">
                                        <SlideFood/>
                                        <SlideFood/>
                                        <SlideFood/>
                                        <SlideFood/>
                                    </div>    
                                </div>
                                
                                <div class="item">
                                    <div class="row">
                                        <SlideFood/>
                                        <SlideFood/>
                                        <SlideFood/>
                                        <SlideFood/>
                                    </div>    
                                </div>
                            
                            </div>
                            
                            <a data-slide="prev" href="#Carousel" class="left carousel-control my-carousel-control">‹</a>
                            <a data-slide="next" href="#Carousel" class="right carousel-control my-carousel-control">›</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default SaleFood;