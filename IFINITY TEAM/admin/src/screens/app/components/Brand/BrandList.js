import React, { Component } from 'react';

import { Layout, Icon, Card, Button, Table } from 'antd';

const brandDataSource = [
  {
    key: '1',
    name: 'Gallo',
    description: 'The juggernaut that is E&J Gallo continues to leave the chasing pack trailing in its wake.'
  },
  {
    key: '2',
    name: 'Concha y Toro',
    description: 'Concha y Toro last year signed a deal with Manchester United Football Club'
  },
  {
    key: '3',
    name: 'Yellow Tail',
    description: 'Yellow Tail, the flagship wine of the Casella Wines company.'
  },
  {
    key: '4',
    name: 'Robert Mondavi',
    description: 'Robert Mondavi’s 98th birthday was marked around the wine world this year with a global online toast.'
  },
  {
    key: '5',
    name: 'Hardys',
    description: 'Despite the recent change of ownership of its parent company, Hardys retains its key sponsorship deals.'
  },{
    key: '6',
    name: 'Beringer',
    description: 'Beringer has put particular focus on its links with the gastronomic world over the past couple of years'
  },
  {
    key: '7',
    name: 'Sutter Home',
    description: 'The brand that claims to have invented White Zinfandel back in the early 1970s'
  },
  {
    key: '8',
    name: "Jacob's Creek",
    description: 'Jacob’s Creek has been investing heavily in brand-building activity and associations with premium events'
  },
   {
    key: '9',
    name: "Lindeman's",
    description: 'Lindeman’s is benefiting immensely from its surge in markets such as Sweden and the Netherlands.'
  },
   {
    key: '10',
    name: 'Blossom Hill',
    description: 'Blossom Hill is the UK’s number one wine brand and fourth largest alcoholic drinks brand in the UK off-trade.'
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

class BrandList extends Component {

  onEdit = (name) => {
    console.log("Edit: ", name);
  }

  onDelete = (name) => {
    console.log("Delete: ", name);
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
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
        <Card title="Brand" extra={
          <div>
            <Button >Add new <Icon type="plus" /></Button>
            <Button style={{ marginLeft: 4,}}>Delete selected <Icon type="delete" /></Button>
          </div>}
        >
          <Table rowSelection={rowSelection} dataSource={brandDataSource} columns={columns} />
        </Card>
      </Layout>
    )
  }
}

export default BrandList;