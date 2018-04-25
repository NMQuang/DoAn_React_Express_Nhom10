import React, { Component } from 'react';

class WineDetail extends Component {
    render() {
        return(
            <div className="row food-info">
                <div className="food-head">
                    <div className="col-lg-6">
                        <img src="images/mon-an/ga-ran.jpg" className="img-responsive center-block" style="max-height: 400px"/>
                    </div>
                    <div className="col-lg-6">
                        <h3>Gà chiên nguyên con</h3>
                        <p> Món gà chiên giòn với phần thịt bên trong chín mềm đậm đà cùng lớp vỏ giòn rụm vàng nâu vừa tới -
                            nếu đó là những gì bạn mong muốn thì hãy đặt hàng ngay nhé!</p>
                        <div className="text-center">
                            <button className="btn btn-success btn-lg">Đặt hàng</button>
                            <a href="cart.html" className="btn btn-info btn-lg">Xem giỏ hàng</a>
                        </div>
                    </div>
                </div>
                <div className="food-branches col-lg-12">
                    <table className="table table-branches"/>
                        <thead>
                            <tr>
                                <th colspan="2" style="padding-top: 15px; font-size: 18px">
                                    Danh sách chi nhánh có món ăn này</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width="60%"> <b>Chi nhánh Hà Nội</b><br/>
                                    <span className="food-branches-location">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        &nbsp; Địa chỉ
                                    </span>
                                </td>
                                <td width="40%" style="vertical-align: middle;"> <i className="fa fa-tag" aria-hidden="true"></i> 100.000 VND </td>
                            </tr>
                            <tr>
                                <td width="60%"> <b>Chi nhánh Đà Nẵng</b><br/>
                                    <span className="food-branches-location">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        &nbsp; Địa chỉ
                                    </span>
                                </td>
                                <td width="40%" style="vertical-align: middle;"> <i className="fa fa-tag" aria-hidden="true"></i> 150.000 VND </td>
                            </tr>
                            <tr>
                                <td width="60%"> <b>Chi nhánh Hồ Chí Minh</b><br/>
                                    <span className="food-branches-location">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        &nbsp; Địa chỉ
                                    </span>
                                </td>
                                <td width="40%" style="vertical-align: middle;"> <i className="fa fa-tag" aria-hidden="true"></i> 200.000 VND </td>
                            </tr>
                        </tbody>
                </div>
            </div>
        )
    }
}
export default WineDetail;