import React, { useState } from "react";
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
  const [logged] = useState(localStorage.getItem('refresh_token'));



  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />


          <Route
            exact
            path="/home"
            element={
              <>
                {logged ? (<LayoutDashboard>  <Home />   </LayoutDashboard>) : (<Login />)}
              </>
            }
          />


          <Route
            exact
            path="/home"
            element={
              <>
                {logged ? (
                  <LayoutDashboard>
                    <Home />
                  </LayoutDashboard>
                ) : (<Login />)}
              </>
            }
          />
          <Route
            exact
            path="/users"
            element={
              <>
                {logged ? (
                  <LayoutDashboard>
                    <Users />
                  </LayoutDashboard>
                ) : (<Login />)}
              </>

            }
          />
          <Route
            exact
            path="/pendingshop"
            element={
              <>
                {logged ? (
                  <LayoutDashboard>
                    <ApprovePendingShop />
                  </LayoutDashboard>
                ) : (<Login />)}
              </>

            }
          />
          <Route
            exact
            path="/findshop"
            element={
              <>
                {logged ? (
                  <LayoutDashboard>
                    <FindShop />
                  </LayoutDashboard>
                ) : (<Login />)}
              </>

            }
          />
          <Route
            exact
            path="/addproduct"
            element={
              <>
                {logged ? (
                  <LayoutDashboard>
                    <AddProduct />
                  </LayoutDashboard>
                ) : (<Login />)}
              </>

            }
          />
          <Route
            exact
            path="/products"
            element={
              <>
                {logged ? (
                  <LayoutDashboard>
                    <Products />
                  </LayoutDashboard>
                ) : (<Login />)}
              </>

            }
          />
          <Route
            exact
            path="/adminlogs"
            element={
              <>
                {logged ? (
                  <LayoutDashboard>
                    <AdminLogs />
                  </LayoutDashboard>
                ) : (<Login />)}
              </>

            }
          />
          <Route
            exact
            path="/matrix"
            element={
              <>
                {logged ? (
                  <LayoutDashboard>
                    <Matrix />
                  </LayoutDashboard>
                ) : (<Login />)}
              </>
            }
          />

        </Routes>
      </Router>
    </>
  );
}
