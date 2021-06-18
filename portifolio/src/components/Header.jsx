import React, { Component } from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

export default class Header extends Component {
  render() {
    const { Header } = Layout;
    return (
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item>
            <GithubOutlined />
          </Menu.Item>
          <Menu.Item>
            <LinkedinOutlined />
          </Menu.Item>
          <Menu.Item>Teste</Menu.Item>
        </Menu>
      </Header>
    );
  }
}
