import {
  AppstoreAddOutlined,
  DashboardOutlined,
  FileSearchOutlined,
  HistoryOutlined,
  LogoutOutlined,
  PicRightOutlined,
  SearchOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  UserOutlined
} from "@ant-design/icons";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "../LoginTab";
// import AdminLogs from "./AdminLogs";
// import ApprovePendingShop from "./ApprovePendingShop";
// import FindShop from "./FindShop";
// import Home from "./Home";
// import ManageAdmin from "./ManageAdmin";
// import Products from "./Products";
// import Users from "./Users";
import { Avatar, Badge, Input, Layout, Menu, message, Popover } from "antd";
import axios from "axios";
import TableData from "./TableData/TableData";

import { React, useState } from "react";

const Search = Input.Search;

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
const logOut =()=>{
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("name");
}
const items = [
  getItem(<a href="/home">DASHBOARD</a>, "sub1", <DashboardOutlined />),
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
  getItem(<a href="/adminlogs">Admin Logs</a>, "sub5", <HistoryOutlined />),
  getItem(<a href="/" onClick={()=>logOut()}>Log-Out</a>, "sub6", <LogoutOutlined />),
];

const columns = [
  
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  
];




export default function Layout2({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState();
  const onClick = (e) => {
    console.log("click", e);
  };
  const searchString =async (e)=>{
    console.log(e);
    // setSearch(e)

    const searched = await axios.get(`https://merchport.z1p.xyz/api/search?q=${e}`);
    console.log(searched);
    if(searched.data.count === 0){
      message.error(`Search ${e} is not found`);
    }
    setSearch(searched.data.result);
  }
  
  return (
    <Layout>
      <Header className="header">
        <div className="brand-and-search">
          <div className="logo">Demo</div>
          <Popover title="Search" content={<TableData data={search} column={columns}/>} trigger="click">

          <Search
            style={{
              width: 300,
              height: 50,
              marginLeft: 30,
            }}
            name="search"
            onSearch={(e)=>searchString(e)}
            placeholder="Search Here"
            prefix={<SearchOutlined />}
            allowClear
            />
          </Popover>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "white", paddingRight: 20 }}>
            {localStorage.getItem('name')}
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
            {children}
            {/* <Home /> */}
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
