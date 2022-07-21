import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RoutesApps } from "../../Router/Routers";

export const Account = () => {
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.account);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(RoutesApps.index);
  };

  return (
    <>
      <h2>!Hi Welcome Erudito</h2>
      <div className="containerPrincipalAccount">
        <div className="box">
          <h1>STORE</h1>
          <img src="https://placeimg.com/640/480/any" alt="porfile" />
          <p>Jorge Loor</p>
          <Link to={RoutesApps.home} className="Link">
            <button>GO STORE</button>
          </Link>
        </div>

        <div>
          <h1>PROFILE</h1>
          <img src="https://placeimg.com/640/480/any" alt="porfile" />
          <p>Jorge Loor</p>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>

        <div>
          <h1>POST</h1>
          <img src="https://placeimg.com/640/480/any" alt="porfile" />
          <p>Jorge Loor</p>
          <button>GO POST</button>
        </div>

        <div>
          <h1>DATA</h1>
          <img src="https://placeimg.com/640/480/any" alt="porfile" />
          <p>Jorge Loor</p>
          <button>GO DATA</button>
        </div>
      </div>
    </>
  );
};
