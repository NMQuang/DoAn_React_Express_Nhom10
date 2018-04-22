import React from 'react';

export default class ChangePassword extends React.Component {
  render() {
    return (
      <div className="container" style={{ margin: `24px auto` }}>
        <div className="col-lg-10 col-lg-offset-1">
          <h4 style={{ paddingTop: `14px` }}>
            {' '}
            <b>Thay đổi mật khẩu</b>{' '}
          </h4>
          <hr />
          <form className="form-horizontal">
            <div className="form-group">
              <label
                className="col-lg-3 col-lg-offset-1 control-label"
                htmlFor="oldPass"
              >
                Nhập mật khẩu hiện tại
              </label>
              <div className="col-lg-4">
                <input
                  id="oldPass"
                  name="oldPass"
                  type="password"
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="col-lg-3 col-lg-offset-1 control-label"
                for="newPass"
              >
                Nhập mật khẩu mới
              </label>
              <div className="col-lg-4">
                <input
                  id="newPass"
                  name="newPass"
                  type="password"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="col-lg-3 col-lg-offset-1 control-label"
                for="reNewPass"
              >
                Nhập lại mật khẩu mới
              </label>
              <div className="col-lg-4">
                <input
                  id="reNewPass"
                  name="reNewPass"
                  type="password"
                  placeholder=""
                  className="form-control input-md"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <div style={{ textAlign: `center` }}>
                <button className="btn btn-success btn-register" type="submit">
                  Thay đổi mật khẩu{' '}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
