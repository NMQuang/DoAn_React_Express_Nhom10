import React from 'react'

export default class Customer extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="col-lg-10 col-lg-offset-1">
                    <h4 style={{paddingTop: `14px`}}> Thông tin khách hàng </h4>
                    <hr/>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="col-md-3 control-label" for="phoneNumber">Số điện thoại</label>
                            <div className="col-md-6">
                                <input 
                                    name="phoneNumber" 
                                    value="01666xxxxxx" 
                                    type="text" 
                                    placeholder="" 
                                    className="form-control input-md" 
                                    required="" 
                                    disabled 
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" for="name">Họ và tên</label>
                            <div className="col-md-6">
                                <input 
                                    name="name" 
                                    value="Phạm Đức Lộc" 
                                    type="text" 
                                    className="form-control input-md" 
                                    required="" 
                                    disabled 
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" for="gender">Giới tính</label>
                            <div className="col-md-2">
                                <select id="gender" name="gender" className="form-control" disabled>
                                    <option value="1">Nam</option>
                                    <option value="2">Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" for="location" >Địa chỉ</label>
                            <div className="col-md-6">
                                <textarea id="location" name="location" className="form-control input-md" required="" disabled>Thành phố Hồ Chí Minh</textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div style={{textAlign: `center`}}>
                                <button className="btn btn-info btn-register">Thay đổi thông tin</button>
                                <a className="btn btn-warning btn-register" href="change-password.html">Thay đổi mật khẩu</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}