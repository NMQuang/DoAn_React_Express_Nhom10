import React, { Component } from 'react';

import { Layout, Icon, Card, Button, Table } from 'antd';

const accountDataSource = [
  {
    key: '1',
    userid: '1',
    username: 'quyenphamkhac001',
    email: 'phamkkhacquyen1996@gmail.com'
  },
  {
    key: '2',
    userid: '2',
    username: 'quyenphamkhac002',
    email: 'phamkkhacquyen1996@gmail.com'
  },
   {
    key: '3',
    userid: '3',
    username: 'quyenphamkhac003',
    email: 'phamkkhacquyen1996@gmail.com'
  },
   {
    key: '4',
    userid: '4',
    username: 'quyenphamkhac004',
    email: 'phamkkhacquyen1996@gmail.com'
  },
   {
    key: '5',
    userid: '5',
    username: 'quyenphamkhac005',
    email: 'phamkkhacquyen1996@gmail.com'
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

class AccountList extends Component {

  onEdit = (name) => {
    console.log("Edit: ", name);
  }

  onDelete = (name) => {
    console.log("Delete: ", name);
  }

  render() {
    const columns = [{
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'Action',
      key: 'action',
      render: ({ name }) => (
        <div>
          <Button onClick={() => this.onEdit(name)}>Edit <Icon type="edit" /></Button>
          <Button onClick={() => this.onDelete(name)} style={{ marginLeft: 4,}}>Delete <Icon type="delete" /></Button>
        </div>
      )
    }];
    return (
      <Layout>
        <Card title="Account" extra={
          <div>
            <Button >Add new <Icon type="plus" /></Button>
            <Button style={{ marginLeft: 4,}}>Delete selected <Icon type="delete" /></Button>
          </div>}
        >
          <Table rowSelection={rowSelection} dataSource={accountDataSource} columns={columns} />
        </Card>
      </Layout>
    )
  }
}

export default AccountList;