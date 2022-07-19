import React from "react";
import { Link } from "react-router-dom";

import { RoutesApps } from "../Router/Routers";

export const Register = () => {
  return (
    <>
      <article className="containerDataRegisterUser">
        <div className="containerLogo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
            alt="logo"
            className="logoRegister"
          />
        </div>

        <div className="containerRegister">
          <p>Register </p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <Link to={RoutesApps.login} className="Link">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </article>
    </>
  );
};
