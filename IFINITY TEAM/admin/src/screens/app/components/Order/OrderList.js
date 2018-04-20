import React, { Component } from 'react';

import { Layout, Icon, Card, Button, Table, Tag } from 'antd';

const categoryDataSource = [
  {
    key: '1',
    id: '#001',
    product: 'Product #1 x 2, Product #2 x 1',
    total: '$150',
    date: '20/04/2018',
    status: 'finish',
  },
  {
    key: '2',
    id: '#002',
    product: 'Product #1 x 2, Product #2 x 1',
    total: '$150',
    date: '20/04/2018',
    status: 'processing',
  },
  {
    key: '3',
    id: '#003',
    product: 'Product #1 x 2, Product #2 x 1',
    total: '$150',
    date: '20/04/2018',
    status: 'setup',
  },
  {
    key: '4',
    id: '#004',
    product: 'Product #1 x 2, Product #2 x 1',
    total: '$150',
    date: '20/04/2018',
    status: 'processing',
  },
  {
    key: '5',
    id: '#005',
    product: 'Product #1 x 2, Product #2 x 1',
    total: '$150',
    date: '20/04/2018',
    status: 'setup',
  },
  {
    key: '6',
    id: '#006',
    product: 'Product #1 x 2, Product #2 x 1',
    total: '$150',
    date: '20/04/2018',
    status: 'setup',
  },
  {
    key: '7',
    id: '#007',
    product: 'Product #1 x 2, Product #2 x 1',
    total: '$150',
    date: '20/04/2018',
    status: 'finish',
  },
  {
    key: '8',
    id: '#008',
    product: 'Product #1 x 2, Product #2 x 1',
    total: '$150',
    date: '20/04/2018',
    status: 'processing',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

class OrderList extends Component {

  onEdit = (name) => {
    console.log("Edit: ", name);
  }

  onDelete = (name) => {
    console.log("Delete: ", name);
  }

  render() {
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    }, {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    }, {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: ( status ) => {
        if(status === 'setup') {
          return (
            <Tag color="#f50">Setup</Tag>
          )
        } else if (status === "processing") {
          return (
            <Tag color="#108ee9">Processing</Tag>
          )
        } else {
          return (
            <Tag color="#87d068">Finish</Tag>
          )
        }
      }
    }, {
      title: 'Action',
      key: 'action',
      render: ({ id }) => (
        <div>
          <Button onClick={() => this.onEdit(id)}>Edit <Icon type="edit" /></Button>
          <Button onClick={() => this.onDelete(id)} style={{ marginLeft: 4,}}>Delete <Icon type="delete" /></Button>
        </div>
      )
    }];
    return (
      <Layout>
        <Card title="Order" extra={
          <div>
            <Button >Add new <Icon type="plus" /></Button>
            <Button style={{ marginLeft: 4,}}>Delete selected <Icon type="delete" /></Button>
          </div>}
        >
          <Table rowSelection={rowSelection} dataSource={categoryDataSource} columns={columns} />
        </Card>
      </Layout>
    )
  }
}

export default OrderList;