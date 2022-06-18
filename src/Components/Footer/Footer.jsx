import React from "react";
import { Link } from "react-router-dom";
import { RoutesApps } from "../Router/Routers";

export const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="containerLogo2">
        <Link to={RoutesApps.home}>
          <img
            className="logo2"
            src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo2.svg?alt=media&token=fda67e02-c113-488a-b82c-77e3bacb2ab0"
            alt="logo2"
          />
        </Link>
      </div>

      <div className="information">
        <h1>INFORMATION</h1>
        <p>Special</p>
        <p>New Producto</p>
        <p>Best Sellers</p>
        <p>Our Store</p>
      </div>

      <div className="account">
        <h1>MY ACCOUNT</h1>
        <p>Special</p>
        <p>New Producto</p>
        <p>Best Sellers</p>
        <p>Our Store</p>
      </div>

      <div className="follow">
        <h1>FOLLOW US</h1>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Tiktok</p>
      </div>
    </div>
  );
};
