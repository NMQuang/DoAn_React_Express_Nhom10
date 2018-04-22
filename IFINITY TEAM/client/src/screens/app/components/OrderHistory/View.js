import React from 'react';

export default class OrderHistory extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="col-lg-10 col-lg-offset-1">
        <h4 style={{paddingTop: `14px`}}> <b>Lịch sử đơn hàng </b></h4>
        <hr/>
        <table className="table table-hover table-bordered">
            <thead>
            <tr>
                <th className="col-lg-3 text-center">Mã đơn hàng</th>
                <th className="col-lg-3 text-center">Ngày tạo</th>
                <th className="col-lg-3 text-center">Tình trạng</th>
                <th className="col-lg-3 text-center"> </th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center">
                        <h4>003</h4>
                    </td>
                    <td className="text-center">
                        <h4>29/11/2017</h4>
                    </td>
                    <td className="text-center">
                        <h4 className="text-success">Đã giao hàng</h4>
                    </td>
                    <td className="text-center">
                         <a href={'/cart'} className="btn btn-info"> Chi tiết </a>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">
                        <h4>002</h4>
                    </td>
                    <td className="text-center">
                        <h4>28/11/2017</h4>
                    </td>
                    <td className="text-center">
                        <h4 className="text-info">Đang giao hàng</h4>
                    </td>
                    <td className="text-center">
                        <a href={'/cart'} className="btn btn-info"> Chi tiết </a>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">
                        <h4>001</h4>
                    </td>
                    <td className="text-center">
                        <h4>27/11/2017</h4>
                    </td>
                    <td className="text-center">
                        <h4 className="text-danger">Đã hủy đơn hàng</h4>
                    </td>
                    <td className="text-center">
                         <a href={'/cart'} className="btn btn-info"> Chi tiết </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
      </div>
    );
  }
}
