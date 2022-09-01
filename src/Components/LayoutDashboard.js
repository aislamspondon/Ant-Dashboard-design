import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  DashboardOutlined,
  FileSearchOutlined,
  HistoryOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "../LoginTab";
// import AdminLogs from "./AdminLogs";
// import ApprovePendingShop from "./ApprovePendingShop";
// import FindShop from "./FindShop";
import Home from "./Home";
// import ManageAdmin from "./ManageAdmin";
// import Products from "./Products";
// import Users from "./Users";

import { Avatar, Badge, Input, Layout, Menu } from "antd";
import { React, useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<a href="/">DASHBOARD</a>, "sub1", <DashboardOutlined />),
  getItem(<a href="/users"> Users</a>, "sub2", <UsergroupAddOutlined />),
  getItem("Shops", "sub3", <ShopOutlined />, [
    getItem(
      <a href="/pendingshop">Approve Pending Shop</a>,
      "1",
      <AppstoreAddOutlined />
    ),
    getItem(<a href="/findshop">Find Shop</a>, "2", <FileSearchOutlined />),
  ]),
  getItem(<a href="/products">Products</a>, "sub4", <UsergroupAddOutlined />),
  getItem("Admin Panel", "sub5", <UserOutlined />, [
    getItem(<a href="/manageadmin">Manage Users</a>, "3", <AppstoreOutlined />),
    getItem(<a href="/adminlogs">Admin Logs</a>, "4", <HistoryOutlined />),
  ]),
  getItem("Log-Out", "sub6", <LogoutOutlined />),
];

export default function Layout2() {
  const [collapsed, setCollapsed] = useState(false);
  const onClick = (e) => {
    console.log("click", e);
  };
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
      <Content>
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
              onClick={onClick}
              // defaultSelectedKeys={["sub1"]}
              defaultOpenKeys={["1"]}
              style={{
                height: "100%",
                overflow: "hidden",
              }}
              items={items}
            />
          </Sider>
          <Content
            style={{
              padding: "20px 24px",
              minHeight: 280,
            }}
          >
            {/* <Router>
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/users" element={<Users />} />
                <Route
                  exact
                  path="/pendingshop"
                  element={<ApprovePendingShop />}
                />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/findshop" element={<FindShop />} />
                <Route exact path="/manageadmin" element={<ManageAdmin />} />
                <Route exact path="/adminlogs" element={<AdminLogs />} />
              </Routes>
            </Router> */}
            <Home />
            {/* <Users /> */}
            {/* <ApprovePendingShop /> */}
            {/* <FindShop /> */}
            {/* <ManageAdmin /> */}
            {/* <AdminLogs /> */}
            {/* <Products /> */}
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
