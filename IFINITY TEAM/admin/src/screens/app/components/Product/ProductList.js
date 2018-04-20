import React, { Component } from 'react';

import { Layout, Icon, Card, Button, Table } from 'antd';

const productDataSource = [
  {
    key: '1',
    name: 'Duckhorn',
    brand: 'Merlot Napa Valley',
    category: 'Red Vin',
    price: '$98'
  },
  {
    key: '2',
    name: 'Château Coutet',
    brand: 'Barsac',
    category: 'Red Vin',
    price: '$37'
  },
  {
    key: '3',
    name: 'K',
    brand: 'Syrah Walla Walla Valley',
    category: 'Red Vin',
    price: '$45'
  },
  {
    key: '4',
    name: 'Casanova di Neri',
    brand: 'Brunello di Montalcino',
    category: 'Clear Vin',
    price: '$65'
  },
  {
    key: '5',
    name: 'Château de St.-Cosme',
    brand: 'Gigondas',
    category: 'Clear Vin',
    price: '$43'
  },
  {
    key: '6',
    name: 'Domaine Huët',
    brand: 'Vouvray Demi-Sec Le Mont',
    category: 'Cognac',
    price: '$44'
  },
  {
    key: '7',
    name: 'Château Canon-La Gaffelière',
    brand: 'St.-Emilion',
    category: 'Cognac',
    price: '$61'
  },
  {
    key: '8',
    name: 'Meyer',
    brand: 'Cabernet Sauvignon Napa Valley',
    category: 'Red Vin',
    price: '$70'
  },
  {
    key: '9',
    name: 'Pahlmeyer',
    brand: 'Chardonnay Napa Valley',
    category: 'Red Vin',
    price: '$75'
  },
  {
    key: '10',
    name: 'Booker',
    brand: 'Oublié Paso Robles',
    category: 'Gin',
    price: '$80'
  },
  {
    key: '1',
    name: 'Duckhorn',
    brand: 'Merlot Napa Valley',
    category: 'Red Vin',
    price: '$98'
  },
  {
    key: '2',
    name: 'Château Coutet',
    brand: 'Barsac',
    category: 'Red Vin',
    price: '$37'
  },
  {
    key: '3',
    name: 'K',
    brand: 'Syrah Walla Walla Valley',
    category: 'Red Vin',
    price: '$45'
  },
  {
    key: '4',
    name: 'Casanova di Neri',
    brand: 'Brunello di Montalcino',
    category: 'Clear Vin',
    price: '$65'
  },
  {
    key: '5',
    name: 'Château de St.-Cosme',
    brand: 'Gigondas',
    category: 'Clear Vin',
    price: '$43'
  },
  {
    key: '6',
    name: 'Domaine Huët',
    brand: 'Vouvray Demi-Sec Le Mont',
    category: 'Cognac',
    price: '$44'
  },
  {
    key: '7',
    name: 'Château Canon-La Gaffelière',
    brand: 'St.-Emilion',
    category: 'Cognac',
    price: '$61'
  },
  {
    key: '8',
    name: 'Meyer',
    brand: 'Cabernet Sauvignon Napa Valley',
    category: 'Red Vin',
    price: '$70'
  },
  {
    key: '9',
    name: 'Pahlmeyer',
    brand: 'Chardonnay Napa Valley',
    category: 'Red Vin',
    price: '$75'
  },
  {
    key: '10',
    name: 'Booker',
    brand: 'Oublié Paso Robles',
    category: 'Gin',
    price: '$80'
  },
  {
    key: '11',
    name: 'Duckhorn',
    brand: 'Merlot Napa Valley',
    category: 'Red Vin',
    price: '$98'
  },
  {
    key: '12',
    name: 'Château Coutet',
    brand: 'Barsac',
    category: 'Red Vin',
    price: '$37'
  },
  {
    key: '13',
    name: 'K',
    brand: 'Syrah Walla Walla Valley',
    category: 'Red Vin',
    price: '$45'
  },
  {
    key: '14',
    name: 'Casanova di Neri',
    brand: 'Brunello di Montalcino',
    category: 'Clear Vin',
    price: '$65'
  },
  {
    key: '15',
    name: 'Château de St.-Cosme',
    brand: 'Gigondas',
    category: 'Clear Vin',
    price: '$43'
  },
  {
    key: '16',
    name: 'Domaine Huët',
    brand: 'Vouvray Demi-Sec Le Mont',
    category: 'Cognac',
    price: '$44'
  },
  {
    key: '17',
    name: 'Château Canon-La Gaffelière',
    brand: 'St.-Emilion',
    category: 'Cognac',
    price: '$61'
  },
  {
    key: '18',
    name: 'Meyer',
    brand: 'Cabernet Sauvignon Napa Valley',
    category: 'Red Vin',
    price: '$70'
  },
  {
    key: '19',
    name: 'Pahlmeyer',
    brand: 'Chardonnay Napa Valley',
    category: 'Red Vin',
    price: '$75'
  },
  {
    key: '20',
    name: 'Booker',
    brand: 'Oublié Paso Robles',
    category: 'Gin',
    price: '$80'
  },
  {
    key: '21',
    name: 'Duckhorn',
    brand: 'Merlot Napa Valley',
    category: 'Red Vin',
    price: '$98'
  },
  {
    key: '22',
    name: 'Château Coutet',
    brand: 'Barsac',
    category: 'Red Vin',
    price: '$37'
  },
  {
    key: '23',
    name: 'K',
    brand: 'Syrah Walla Walla Valley',
    category: 'Red Vin',
    price: '$45'
  },
  {
    key: '24',
    name: 'Casanova di Neri',
    brand: 'Brunello di Montalcino',
    category: 'Clear Vin',
    price: '$65'
  },
  {
    key: '25',
    name: 'Château de St.-Cosme',
    brand: 'Gigondas',
    category: 'Clear Vin',
    price: '$43'
  },
  {
    key: '26',
    name: 'Domaine Huët',
    brand: 'Vouvray Demi-Sec Le Mont',
    category: 'Cognac',
    price: '$44'
  },
  {
    key: '27',
    name: 'Château Canon-La Gaffelière',
    brand: 'St.-Emilion',
    category: 'Cognac',
    price: '$61'
  },
  {
    key: '28',
    name: 'Meyer',
    brand: 'Cabernet Sauvignon Napa Valley',
    category: 'Red Vin',
    price: '$70'
  },
  {
    key: '29',
    name: 'Pahlmeyer',
    brand: 'Chardonnay Napa Valley',
    category: 'Red Vin',
    price: '$75'
  },
  {
    key: '30',
    name: 'Booker',
    brand: 'Oublié Paso Robles',
    category: 'Gin',
    price: '$80'
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

class ProductList extends Component {

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
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    }, {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    }, {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
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
        <Card title="Product" extra={
          <div>
            <Button >Add new <Icon type="plus" /></Button>
            <Button style={{ marginLeft: 4,}}>Delete selected <Icon type="delete" /></Button>
          </div>}
        >
          <Table rowSelection={rowSelection} dataSource={productDataSource} columns={columns} />
        </Card>
      </Layout>
    )
  }
}

export default ProductList;