import React, { Component } from 'react';

class Wine extends Component {
    render() {
        return(
            <div class="col-md-3">
                <div href="#" class="thumbnail">
                    <div class="box">
                        <img alt="Image" src="images/suon-xao-chua-ngot.jpg" class="img-responsive my-image"/>
                    </div>
                    <div class="caption">
                        <h4>Tên món ăn</h4>
                        <p><i class="fa fa-tag" aria-hidden="true"></i> 100.000 - 100.000 vnd</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Wine;