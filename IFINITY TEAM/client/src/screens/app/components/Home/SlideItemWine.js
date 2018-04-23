import React, { Component } from 'react';

class SlideItemWine extends Component {
    render() {
        return(
            <div class="col-md-3">
                <a href="#" class="thumbnail thumbnail-carousel">
                    <img alt="Image" src="http://placehold.it/250x200" class="img-responsive"/>
                        <div class="caption">
                            <h4>Tên món ăn</h4>
                            <p><i class="fa fa-tag" aria-hidden="true"></i> &nbsp; Giá: 100.000 VND</p>
                        </div>
                </a>
            </div>
        )
    }
}
export default SlideItemWine;