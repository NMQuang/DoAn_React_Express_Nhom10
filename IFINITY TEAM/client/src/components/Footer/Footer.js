import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="container">
            <div className="row col-md-10 col-md-offset-1">
                <div className="col-md-4">
                    <h3> Thông tin </h3>
                    <ul>
                        <li><p><i className="fa fa-phone"></i> &nbsp; &nbsp;Hotline: 0169xxxxxx </p></li>
                        <li><p><i className="fa fa-users"></i> &nbsp; Lượng người truy cập: 1000000 </p></li>
                        <li><a href="introduce.html"> &nbsp; <i className="fa fa-info"></i> &nbsp;&nbsp;Thông tin trang web </a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3> Theo dõi qua mạng xã hội </h3>
                    <ul>
                        <li><a href="#"> <i className="fa fa-facebook-square"></i>&nbsp; Facebook </a></li>
                        <li><a href="#"> <i className="fa fa-twitter-square"></i>&nbsp; Twitter </a></li>
                        <li><a href="#"> <i className="fa fa-linkedin-square"></i>&nbsp; Linkedin </a></li>
                        <li><a href="#"> <i className="fa fa-google-plus-square"></i>&nbsp; Google Plus </a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3> Theo dõi qua email </h3>
                    <form role="subscribe">
                        <div className="input-group col-md-12">
                            <input type="text" className="form-control" placeholder="Email của bạn"/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
