import React, { Component } from 'react';
class Slide extends Component {
    render() {
        return(
            
        <div class="row">
            <div id="top-slide" class="carousel slide carousel-fade" data-ride="carousel">
                <ol class="carousel-indicators my-carousel-indicators">
                    <li data-target="#top-slide" data-slide-to="0" class="active"></li>
                    <li data-target="#top-slide" data-slide-to="1"></li>
                    <li data-target="#top-slide" data-slide-to="2"></li>
                </ol>
                <div class='carousel-inner' role='listbox'>
                    <div class='item item-top-slide active'>
                        <img class="img-responsive" src='images/top-mon-an.jpg'/>
                        <div class='carousel-caption'>
                            <h1>Bánh xèo</h1>
                        </div>
                    </div>
                    <div class='item item-top-slide'>
                        <img class="img-responsive" src='images/lau-bo.jpg'/>
                        <div class='carousel-caption'>
                            <h1>Lẩu bò</h1>
                        </div>
                    </div>
                    <div class='item item-top-slide'>
                        <img class="img-responsive" src='images/mon-ngon.png'/>
                        <div class='carousel-caption'>
                            <h1>Món ngon mỗi ngày</h1>
                        </div>
                    </div>
                </div>

                <a class='left carousel-control' href='#top-slide' role='button' data-slide='prev'>
                    <span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                </a>

                <a class='right carousel-control' href='#top-slide' role='button' data-slide='next'>
                    <span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                </a>
            </div>
        </div>
    
        )
    }
}
export default Slide;