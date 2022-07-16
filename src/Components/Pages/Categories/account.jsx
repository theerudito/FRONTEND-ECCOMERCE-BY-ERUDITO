import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RoutesApps } from "../../Router/Routers";

export const Account = () => {
  const { data } = useSelector((state) => state.account);

  return (
    <>
      <p>Account</p>
      <Link to={RoutesApps.home}>
        <p>Home {data.user} </p>
      </Link>
    </>
  );
};
