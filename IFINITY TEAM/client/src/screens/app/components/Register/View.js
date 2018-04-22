import React from 'react';

export default class Register extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-10 col-lg-offset-1">
          <h4 style={{ paddingTop: `14px` }}> Tạo tài khoản khách hàng mới </h4>
          <hr />
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-md-3 control-label" for="phoneNumber">
                Số điện thoại
              </label>
              <div className="col-md-6">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="password">
                Mật khẩu
              </label>
              <div className="col-md-6">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="rePassword">
                Nhập lại mật khẩu
              </label>
              <div className="col-md-6">
                <input
                  id="rePassword"
                  name="rePassword"
                  type="password"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="name">
                Họ và tên
              </label>
              <div className="col-md-6">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="gender">
                Giới tính
              </label>
              <div className="col-md-2">
                <select id="gender" name="gender" className="form-control">
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" for="location">
                Địa chỉ
              </label>
              <div className="col-md-6">
                <textarea
                  id="location"
                  name="location"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <div style={{ textAlign: `center` }}>
                <button
                  id="submit"
                  name="submit"
                  className="btn btn-primary btn-lg btn-register"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
