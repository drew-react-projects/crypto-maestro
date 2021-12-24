import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Avatar, Menu } from 'antd';
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import logo from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      {/* nav bar logo  */}
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoMaestro</Link>
        </Typography.Title>
      </div>

      {/* nav bar items  */}
      <Menu theme="dark">
        <Menu.Item key="Home-menu-item" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="Cryptocurrencies-menu-item" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item key="Exchanges-menu-item" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>

        <Menu.Item key="News-menu-item" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
