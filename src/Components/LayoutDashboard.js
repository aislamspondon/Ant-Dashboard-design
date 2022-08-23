import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  FileSearchOutlined,
  HistoryOutlined,
  LogoutOutlined,
  PieChartOutlined,
  ProfileOutlined,
  SearchOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

// import Home from "./Home";
// import Users from "./Users";

// import ApprovePendingShop from "./ApprovePendingShop";
// import FindShop from "./FindShop";
// import ManageAdmin from "./ManageAdmin";
import AdminLogs from "./AdminLogs";

import { Avatar, Badge, Breadcrumb, Input, Layout, Menu } from "antd";
import { React, useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Layout2() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Header className="header">
        <div className="brand-and-search">
          <div className="logo">Demo</div>
          <Input
            style={{
              width: 300,
              height: 50,
              marginLeft: 30,
            }}
            placeholder="Search Here"
            prefix={<SearchOutlined />}
            allowClear
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "white", paddingRight: 20 }}>
            Welcome Asraful Islam
          </h3>

          <Badge count={3}>
            <Avatar size={40} icon={<UserOutlined />} />
          </Badge>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
            className="site-layout-background"
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["2"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
            >
              <a href="/home">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  DASHBOARD
                </Menu.Item>
              </a>
              <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
                Users
              </Menu.Item>
              <SubMenu key="sub1" icon={<ShopOutlined />} title="Shops">
                <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
                  Approve Pending Shop
                </Menu.Item>
                <Menu.Item key="4" icon={<FileSearchOutlined />}>
                  Find Shop
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="5" icon={<ProfileOutlined />}>
                Products
              </Menu.Item>
              <SubMenu key="sub2" icon={<UserOutlined />} title="Admin Panel">
                <Menu.Item key="6" icon={<AppstoreOutlined />}>
                  Manage Users
                </Menu.Item>
                <Menu.Item key="7" icon={<HistoryOutlined />}>
                  Admin Logs
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="8" icon={<LogoutOutlined />}>
                Log-Out
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {/* <Home /> */}
            {/* <Users /> */}
            {/* <ApprovePendingShop /> */}
            {/* <FindShop /> */}
            {/* <ManageAdmin /> */}
            <AdminLogs />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Design By *****
      </Footer>
    </Layout>
  );
}
