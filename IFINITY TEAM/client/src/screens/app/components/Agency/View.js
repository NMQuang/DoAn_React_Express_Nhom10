import React from 'react';

export default class Agency extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-10 col-lg-offset-1">
          <h4 style={{ paddingTop: `14px` }}>
            {' '}
            <b> Chi nhánh Quận 01</b>
          </h4>
          <hr />
          <div className="row">
            <div className="col-lg-5" style={{ height: `315px` }}>
              <img
                src="http://placehold.it/250x200"
                className="img-responsive img-agency"
                style={{ maxHeight: `315px` }}
              />
              <div className="agency-info" style={{ marginTop: `10px` }}>
                <p>
                  {' '}
                  <i className="fa fa-map-marker" /> Địa chỉ: 10A-10B-10C Lê
                  Thánh Tôn, P. Bến Nghé, Q. 1
                </p>
                <p>Giờ đón khách: 8h:30 - 11h, 16h:30 - 20h:30</p>
              </div>
            </div>
            <div className="col-lg-7">
              <form>
                <div className="panel panel-order">
                  <div className="panel-heading text-center">
                    <h4>Đặt bàn tại chi nhánh Quận 01</h4>
                  </div>
                  <ul className="list-group text-center">
                    <li className="list-group-item">
                      <div className="input-group col-md-4 col-md-offset-2 pull-left">
                        <span className="input-group-addon">
                          <i className="fa fa-clock-o fa-lg" />
                        </span>
                        <select
                          id="timeOrder"
                          name="timeOrder"
                          className="form-control"
                          style={{
                            borderBottomRightRadius: `0px`,
                            borderTopRightRadius: `0px`,
                          }}
                        >
                          <option value="8:30">8:30</option>
                          <option value="9:00">9:00</option>
                          <option value="9:30">9:30</option>
                          <option value="10:00">10:00</option>
                          <option value="10:30">10:30</option>
                          <option value="11:00">11:00</option>
                          <option value="11:30">11:30</option>
                          <option value="12:00">12:00</option>
                          <option value="12:30">12:30</option>
                          <option value="13:00">13:00</option>
                          <option value="13:30">13:30</option>
                          <option value="14:00">14:00</option>
                          <option value="14:30">14:30</option>
                          <option value="15:00">15:00</option>
                          <option value="15:30">15:30</option>
                          <option value="16:00">16:00</option>
                          <option value="16:30">16:30</option>
                          <option value="17:00">17:00</option>
                          <option value="17:30">17:30</option>
                          <option value="18:00">18:00</option>
                          <option value="18:30">18:30</option>
                          <option value="19:00">19:00</option>
                          <option value="19:30">19:30</option>
                          <option value="20:00">20:00</option>
                          <option value="20:30">20:30</option>
                        </select>
                      </div>
                      <div className="input-group col-md-4">
                        <span
                          className="input-group-addon"
                          style={{
                            borderTopLeftRadius: `0px`,
                            borderBottomLeftRadius: `0px`,
                          }}
                        >
                          <i className="fa fa-users fa-lg" />
                        </span>
                        <select
                          id="amount"
                          name="amount"
                          className="form-control"
                        >
                          <option value="1">1 người</option>
                          <option value="2">2 người</option>
                          <option value="3">3 người</option>
                          <option value="4">4 người</option>
                          <option value="5">5 người</option>
                          <option value="6">6 người</option>
                          <option value="7">7 người</option>
                          <option value="8">8 người</option>
                        </select>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="input-group col-md-8 col-md-offset-2">
                        <span className="input-group-addon">Số điện thoại</span>
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-phone fa-lg" />
                      &nbsp Hot line hỗ trợ:
                      <em style={{ color: `red` }}>01666xxxxxx</em>
                    </li>
                    <button
                      type="submit"
                      className="btn btn-lg btn-block btn-success"
                      href="#"
                    >
                      Đặt bàn
                    </button>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <h4 style={{ paddingTop: `14px` }}>
            {' '}
            Các món ăn thuộc <b> chi nhánh Quận 01</b>
          </h4>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="thumbnail">
                <img
                  alt="Image"
                  src="http://placehold.it/250x200"
                  className="img-responsive"
                />
                <div className="caption">
                  <h4>Tên món ăn</h4>
                  <p>
                    <i className="fa fa-tag" aria-hidden="true" /> &nbsp Giá:
                    100.000 VND
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
