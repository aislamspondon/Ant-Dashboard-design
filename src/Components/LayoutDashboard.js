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

import {
  Avatar,
  Breadcrumb,
  Card,
  Input,
  Layout,
  Menu,
  Typography,
} from "antd";
import { React, useState } from "react";
import BarChartView from "./Chart/BarChartView";
import LineChartView from "./Chart/LineChartView";
import PieChartView from "./Chart/PieChartView";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
let { Title } = Typography;

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

          <Avatar size={50} icon={<UserOutlined />} />
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
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                DASHBOARD
              </Menu.Item>
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
            <Title>Dashboard</Title>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card
                title="Number of Total Users"
                bordered={false}
                style={{
                  width: 600,
                  height: 350,
                  borderStyle: "groove",
                  position: "relative",
                  textAlign: "center",
                  margin: 5,
                  borderRadius: 12,
                }}
              >
                <LineChartView />
              </Card>
              <Card
                title="Number of Platform users"
                bordered={false}
                style={{
                  width: 400,
                  height: 350,
                  borderStyle: "groove",
                  position: "relative",
                  textAlign: "center",
                  margin: 5,
                  borderRadius: 12,
                }}
              >
                <PieChartView />
              </Card>
            </div>
            <Card
              title="Number of Total Shop"
              bordered={false}
              style={{
                width: 800,
                height: 350,
                borderStyle: "groove",
                position: "relative",
                textAlign: "center",
                margin: 5,
                marginTop: 10,
                borderRadius: 12,
              }}
            >
              <BarChartView />
            </Card>
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
