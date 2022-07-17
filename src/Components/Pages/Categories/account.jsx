import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RoutesApps } from "../../Router/Routers";

export const Account = () => {
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.account);


  const handleLogout = () => {
    navigate(RoutesApps.index);
  };

  return (
    <>
      <p>Account</p>
      <Link to={RoutesApps.home}>
        <p>Home {data.user} </p>
      </Link>
      <p onClick={handleLogout}>Logout</p>
    </>
  );
};
