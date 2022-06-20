import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Header2 } from "../Header/Header2";
import { Menu } from "../Menu/Menu";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Cart = () => {
  return (
    <>
      <Header />
      <Header2 />
      <Menu />
      <div className="contenedorP">
        <div className="containerPayment">
          <div className="details">
            <p>Pinture</p>
            <p className="Name">Name</p>
            <p>Cant</p>
            <p>Price/Unit</p>
            <p>Price/Total</p>
            <p>Action</p>
          </div>
          <div className="containerInfoPago">
            <img
              src="https://avatars.dicebear.com/api/micah/weds.svg"
              alt="pic"
            />

            <p className="Name">Name</p>
            <p>Cant</p>
            <p>Price/Unit</p>
            <p>Price/Total</p>

            <span>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>

          <div className="containerTotals">
            <div className="logo3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
                alt="logo"
              />
              <div className="dataUser">
              <input placeholder="Name" type="text" className="inputName" />
              <input placeholder="Email" type="text"  className="inputEmail"/>
              </div>
            </div>

            <div className="payment">
              <p>Descuent</p>
              <p>Impuest</p>
              <p>Subtotal</p>
              <p>Total</p>
              <button>Pay</button>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
      <Footer />
    </>
  );
};
