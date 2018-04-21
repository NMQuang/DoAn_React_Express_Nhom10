import React, { Component } from 'react';
import { Layout, Card, Icon, Row, Col } from 'antd';

import LineChart from './LineChart';
import RadarChart from './RadarChart';
import HeatMap from './HeatMap';

const { Content } = Layout;

const iconStyle = {
  fontSize: 32,
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  marginRight: 16,
  width: 75,
  height: 75, 
}

const panelStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const lgTitleStyle = {
  fontSize: 32, 
  fontWeight: '500', 
  margin: 0,
  padding: 0
}

const smTitleStyle = {
  fontSize: 24,
  fontWeight: '500',
}

const descriptionStyle = {
  fontSize: 16,
  margin: 0,
}

const boxStyle = {
  marginBottom: 16,
}

class Dashboard extends Component {
  render() {
    return (
      <Content>
        <Layout>
          <Row gutter={24} style={boxStyle}>
            <Col md={6} xs={24}>
              <Card>
                <div style={panelStyle}>
                  <span style={Object.assign({}, iconStyle, { background: '#23AE89'})}>
                    <Icon type="rocket" />
                  </span>
                  <div>
                    <p style={lgTitleStyle}>36 <span style={smTitleStyle}>%</span></p>
                    <p style={descriptionStyle}>Growth</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6} xs={24}>
              <Card>
                <div style={panelStyle}>
                  <span style={Object.assign({}, iconStyle, { background: '#2EC1CC'})}>
                    <Icon type="team" />
                  </span>
                  <div>
                    <p style={lgTitleStyle}>22 <span style={smTitleStyle}>%</span></p>
                    <p style={descriptionStyle}>New Users</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6} xs={24}>
              <Card>
                <div style={panelStyle}>
                  <span style={Object.assign({}, iconStyle, { background: '#FFB61C'})}>
                    <Icon type="bank" />
                  </span>
                  <div>
                    <p style={lgTitleStyle}>37 <span style={smTitleStyle}>k</span></p>
                    <p style={descriptionStyle}>Profit</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6} xs={24}>
              <Card>
                 <div style={panelStyle}>
                  <span style={Object.assign({}, iconStyle, { background: '#E94B3B'})}>
                    <Icon type="shopping-cart" />
                  </span>
                  <div>
                    <p style={lgTitleStyle}>21 <span style={smTitleStyle}>k</span></p>
                    <p style={descriptionStyle}>Sales</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          <Row gutter={24} style={boxStyle}>
            <Col md={16} xs={24}>
              <Card>
                <LineChart />
              </Card>
            </Col>
            <Col md={8} xs={24}>
              <Card>
                <RadarChart />
              </Card>
            </Col>
          </Row>

          <Row gutter={24} style={boxStyle}>
            <Col span={24}>
              <Card>
                <HeatMap />
              </Card>
            </Col>
          </Row>
        </Layout>
      </Content>
    )
  }
}

export default Dashboard;
