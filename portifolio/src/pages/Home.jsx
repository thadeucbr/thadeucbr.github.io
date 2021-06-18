import { Layout, Row, Col, Timeline } from 'antd';
import React, { Component } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import '../index.css';
export default class Home extends Component {
  render() {
    const { Content, Footer } = Layout;
    return (
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '20px 50px' }}>
          <Row style={{ padding: '10px 50px'}}>
            <Col>
                <h1>Desenvolvimento Profissional</h1>
                <hr />
              <Timeline mode="alternate">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">
                  Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo.
                </Timeline.Item>
                <Timeline.Item color="red">
                  Network problems being solved 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                  Technical testing 2015-09-01
                </Timeline.Item>
              </Timeline>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
