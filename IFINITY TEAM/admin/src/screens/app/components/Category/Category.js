import React, { Component } from 'react';

import { Layout, Icon, Card, Button, Table } from 'antd';

const categoryDataSource = [
  {
    key: '1',
    name: 'Brandy',
    description: 'Cognac, Armagnac'
  },
  {
    key: '2',
    name: 'Whisky ',
    description: 'Bourbon, Rye, Grain, Malt'
  },
  {
    key: '3',
    name: 'Rhum',
    description: 'White Rhum, Yellow Rhum, Brown Rhum'
  },
  {
    key: '4',
    name: 'Vodka',
    description: 'Clear Vodka, Flavour Vodka'
  },
  {
    key: '5',
    name: 'Gin',
    description: 'Clear Gin, Golden Gin, Flavoured Gin'
  },{
    key: '6',
    name: 'Vin',
    description: 'Red Vin, White Vin, Rose Vin'
  },
  {
    key: '7',
    name: 'Tequila',
    description: 'Blanco, Reposado, Anego'
  },
  {
    key: '8',
    name: 'Liqueurs',
    description: 'Cooktail'
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

class CategoryList extends Component {

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
        <Card title="Category" extra={
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

export default CategoryList;