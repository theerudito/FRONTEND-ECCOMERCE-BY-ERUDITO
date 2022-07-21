import React from "react";
import { Route, Routes } from "react-router-dom";
import { IndexPage } from "../Pages/IndexPage";
import { Cart } from "../Pages/Cart";
import { Accessories } from "../Pages/Categories/Accessories";
import { Account } from "../Pages/Categories/account";
import { Computers } from "../Pages/Categories/Computers";
import { Headset } from "../Pages/Categories/Headset";
import { Keyboards } from "../Pages/Categories/Keyboards";
import { Laptops } from "../Pages/Categories/Laptops";
import { Monitors } from "../Pages/Categories/Monitors";
import { PageHome } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Logout } from "../Pages/Logout";
import { Page404 } from "../Pages/Page404";
import { Register } from "../Pages/Register";

export const RoutesApps = {
  index: "/",
  home: "/home",
  computers: "/computers",
  headsets: "/headsets",
  laptops: "/laptops",
  monitors: "/monitors",
  keyboards: "/keyboards",
  accessories: "/accessories",
  login: "/login",
  register: "/register",
  logout: "/logout",
  account: "/account",
  cart: "/cart",
};

export const Router = () => {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route path={RoutesApps.index} element={<IndexPage />} />
        <Route path={RoutesApps.home} element={<PageHome />} />
        <Route path={RoutesApps.computers} element={<Computers />} />
        <Route path={RoutesApps.headsets} element={<Headset />} />
        <Route path={RoutesApps.laptops} element={<Laptops />} />
        <Route path={RoutesApps.monitors} element={<Monitors />} />
        <Route path={RoutesApps.keyboards} element={<Keyboards />} />
        <Route path={RoutesApps.accessories} element={<Accessories />} />
        <Route path={RoutesApps.cart} element={<Cart />} />
        <Route path={RoutesApps.register} element={<Register />} />
        <Route path={RoutesApps.login} element={<Login />} />
        <Route path={RoutesApps.logout} element={<Logout />} />
        <Route
          path={RoutesApps.account}
          element={user ? <Account /> : <IndexPage />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
