import React from "react";
import { Route, Routes } from "react-router-dom";
import { Accessories } from "../Pages/Categories/Accessories";
import { Computers } from "../Pages/Categories/Computers";
import { Games } from "../Pages/Categories/Games";
import { HardWare } from "../Pages/Categories/HardWare";
import { Headset } from "../Pages/Categories/Headset";
import { Keyboards } from "../Pages/Categories/Keyboards";
import { Laptops } from "../Pages/Categories/Laptops";
import { Monitors } from "../Pages/Categories/Monitors";
import { Software } from "../Pages/Categories/Software";
import { VideoCard } from "../Pages/Categories/VideoCard";
import { PageHome } from "../Pages/Home";
import { Page404 } from "../Pages/Page404";

export const RoutesApps = {
  home: "/",
  computers: "/computers",
  headsets: "/headsets",
  laptops: "/laptops",
  monitors: "/monitors",
  keyboards: "/keyboards",
  videocards: "/video-cards",
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
        <Route path={RoutesApps.videocards} element={<VideoCard />} />
        <Route path={RoutesApps.hardware} element={<HardWare />} />
        <Route path={RoutesApps.software} element={<Software />} />
        <Route path={RoutesApps.games} element={<Games />} />
        <Route path={RoutesApps.accessories} element={<Accessories />} />
        <Route path={RoutesApps.register} element={<Software />} />
        <Route path={RoutesApps.login} element={<Games />} />
        <Route path={RoutesApps.logout} element={<Accessories />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
