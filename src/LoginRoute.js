import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogs from "./Components/AdminLogs";
import ApprovePendingShop from "./Components/ApprovePendingShop";
import FindShop from "./Components/FindShop";
import Home from "./Components/Home";
import Matrix from "./Components/Matrix";
import Login from "./LoginTab";
// import ManageAdmin from "./Components/ManageAdmin";
import AddProduct from "./Components/AddProduct";
import LayoutDashboard from "./Components/LayoutDashboard";
import Products from "./Components/Products";
import Users from "./Components/Users";

export default function LoginRoute() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={
              <LayoutDashboard>
                <Home />
              </LayoutDashboard>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <LayoutDashboard>
                <Home />
              </LayoutDashboard>
            }
          />
          <Route
            exact
            path="/users"
            element={
              <LayoutDashboard>
                <Users />
              </LayoutDashboard>
            }
          />
          <Route
            exact
            path="/pendingshop"
            element={
              <LayoutDashboard>
                <ApprovePendingShop />
              </LayoutDashboard>
            }
          />
          <Route
            exact
            path="/findshop"
            element={
              <LayoutDashboard>
                <FindShop />
              </LayoutDashboard>
            }
          />
          <Route
            exact
            path="/addproduct"
            element={
              <LayoutDashboard>
                <AddProduct />
              </LayoutDashboard>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <LayoutDashboard>
                <Products />
              </LayoutDashboard>
            }
          />
          <Route
            exact
            path="/adminlogs"
            element={
              <LayoutDashboard>
                <AdminLogs />
              </LayoutDashboard>
            }
          />
          <Route
            exact
            path="/matrix"
            element={
              <LayoutDashboard>
                <Matrix />
              </LayoutDashboard>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
