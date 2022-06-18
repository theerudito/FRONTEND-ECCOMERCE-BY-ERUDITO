import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import { Accessories } from "../Pages/Categories/Accessories";
import { Computers } from "../Pages/Categories/Computers";
import { Headset } from "../Pages/Categories/Headset";
import { Keyboards } from "../Pages/Categories/Keyboards";
import { Laptops } from "../Pages/Categories/Laptops";
import { Monitors } from "../Pages/Categories/Monitors";
import { PageHome } from "../Pages/Home";
import { Page404 } from "../Pages/Page404";

export const RoutesApps = {
  home: "/",
  computers: "/computers",
  headsets: "/headsets",
  laptops: "/laptops",
  monitors: "/monitors",
  keyboards: "/keyboards",
  hardware: "/hardware",
  software: "/software",
  games: "/games",
  accessories: "/accessories",
  login: "/login",
  register: "/register",
  logout: "/logout",
  profile: "/profile",
  cart: "/cart",
  checkout: "/checkout",
  order: "/order",
};

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={RoutesApps.home} element={<PageHome />} />
        <Route path={RoutesApps.computers} element={<Computers />} />
        <Route path={RoutesApps.headsets} element={<Headset />} />
        <Route path={RoutesApps.laptops} element={<Laptops />} />
        <Route path={RoutesApps.monitors} element={<Monitors />} />
        <Route path={RoutesApps.keyboards} element={<Keyboards />} />
        <Route path={RoutesApps.accessories} element={<Accessories />} />
        <Route path={RoutesApps.cart} element={<Cart/>} />
        <Route path={RoutesApps.register} element={""} />
        <Route path={RoutesApps.login} element={""} />
        <Route path={RoutesApps.logout} element={""} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
