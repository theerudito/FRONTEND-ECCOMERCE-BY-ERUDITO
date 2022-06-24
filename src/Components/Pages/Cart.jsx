import React from "react";
import { useContext } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Header2 } from "../Header/Header2";
import { Menu } from "../Menu/Menu";
import computerContext from "../Providers/ProviderComputer";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Cart = () => {
  const { cart, setCart } = useContext(computerContext);

  const deleteCart = (itemId) => {
    const borrar = cart.filter((item) => item.id !== itemId);
    setCart(borrar);
    console.log("borrando");
  };

  return (
    <>
      <Header />
      <Header2 />
      <Menu />
      <div className="contenedorP">
        <div className="containerPayment">
          <div className="details">
            <p className="pinture">Cant</p>
            <p className="Name">Name</p>
            <p>Desc</p>
            <p>Price/Unit</p>
            <p>Price/Total</p>
            <p>Action</p>
          </div>
          {cart.map((item) => (
            <div className="containerInfoPago" key={item.id}>
              <p className="">Cant </p>

              <p className="Name">{item.name} </p>
              <p>Cant </p>
              <p>{item.price} </p>
              <p>Price/Total</p>

              <span onClick={() => deleteCart(item.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </div>
          ))}

          <div className="containerTotals">
            <div className="logo3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
                alt="logo"
              />
              <div className="dataUser">
                <input placeholder="Name" type="text" className="inputName" />
                <input placeholder="Email" type="text" className="inputEmail" />
              </div>
            </div>

            <div className="payment">
              <p>Descuent</p>
              <p>Impuest</p>
              <p>Subtotal</p>
              <p>Total</p>
              <button type="submit">Pay</button>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
      <Footer />
    </>
  );
};
