import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RoutesApps } from "../../Router/Routers";
import storeIco from "../../../Imagens/store.svg";
import profileIco from "../../../Imagens/profile.svg";
import postIco from "../../../Imagens/products.png";
import dataIco from "../../../Imagens/data.svg";

export const Account = () => {
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.account);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(RoutesApps.index);
  };

  return (
    <>
      <div className="titleAccount">
        <h2>!Hi Welcome {data.name} </h2>
      </div>

      <div className="containerPrincipalAccount">
        <div className="box">
          <h1>STORE</h1>
          <img src={storeIco} alt="porfile" />
          <p>Home </p>
          <p>Home </p>
          <p>Home </p>
          <Link to={RoutesApps.home} className="Link">
            <button>GO STORE</button>
          </Link>
        </div>

        <div>
          <h1>PROFILE</h1>
          <img src={profileIco} alt="porfile" />
          <p>{data.name} </p>
          <p>{data.email}</p>
          <p>ID: 1111 </p>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>

        <div>
          <h1>POST</h1>
          <img src={postIco} alt="porfile" />
          <p>Home</p>
          <p>Home </p>
          <p>Home </p>
          <button>GO POST</button>
        </div>

        <div>
          <h1>DATA</h1>
          <img src={dataIco} alt="porfile" />
          <p>Home</p>
          <p>Home </p>
          <p>Home </p>
          <button>GO DATA</button>
        </div>
      </div>
    </>
  );
};
