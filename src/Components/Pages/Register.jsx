import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { RoutesApps } from "../Router/Routers";

export const Register = () => {
  return (
    <>
      <div className="principalContainer">
        <article className="containerLogo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
            alt="logo"
          />
        </article>
        <hr />
        <article className="containerForm">
          <form>
            <input type="text" placeholder="name" name="Name" />
            <input type="text" placeholder="user" name="Username" />
            <input type="password" placeholder="password" name="Password" />
            <Link to={RoutesApps.account} className="Link">
              <button type="submit">Register</button>
            </Link>
          </form>
        </article>
      </div>
      <br />
      <Footer />
    </>
  );
};
