import { useRef } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Header2 } from "../Header/Header2";
import { Menu } from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";

import { SocialMedia } from "../SocialMedia/SocialMedia";
import {
  decrement,
  deleteCart,
  getPayment,
  getTotal,
  increment,
} from "../../store/slices/cart/cart";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useEffect } from "react";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cart = [], counter, total } = useSelector((state) => state.cart);

  const nameRef = useRef("");
  const emailRef = useRef("");

  const payment = () => {
    let user = nameRef.current.value;
    let email = emailRef.current.value;

    if (user === "" || email === "" || cart.length === 0) {
      Swal.fire({
        title: "Error",
        text: "Please you need to name and email",
        icon: "error",

        confirmButtonText: "Ok",
      });

      if (cart.length === 0) {
        Swal.fire({
          title: "Error",
          text: "Add products to cart",
          icon: "error",

          confirmButtonText: "Ok",
        });
      }
    } else {
      Swal.fire(
        `Thanks for your purchase ${user}!`,
        "You clicked the button!",
        "success"
      );
      dispatch(getPayment({ user, email }));
      nameRef.current.value = "";
      emailRef.current.value = "";

      dispatch(getPayment(user, email));
      dispatch(deleteCart());
    }
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <Menu />
      <div className="contenedorP">
        <div className="containerPayment">
          <div className="details">
            <p className="cant">Cant</p>
            <p className="name">Name</p>
            <p className="priceUnitary">Price/Unit</p>
            <p className="priceTotal">Price/Total</p>
            <p className="action">Action</p>
          </div>

          {cart.map((item) => (
            <div className="containerInfoPago" key={item._id}>
              <div className="conTotal">
                {/* <button onClick={() => dispatch(decrement())} className="res">
                  -
                </button> */}
                <p className="cant">{item.cant} </p>
                {/* <button onClick={() => dispatch(increment())} className="sum">
                  +
                </button> */}
              </div>

              <p className="name">
                {item.name} {item.description} {item.marc}
              </p>
              <p className="priceUnitary"> {item.priceDesc} </p>
              <p className="priceTotal">{item.priceTotal.toFixed(2)} </p>
              <span onClick={() => dispatch(deleteCart(item._id))}>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </div>
          ))}

          <div className="containerTotals">
            <div className="total">
              <p>Total: {total} </p>
            </div>

            <div className="contenderBody">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
                alt="logo"
              />
              <div className="dataUser">
                <div className="divformPay">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      payment();
                    }}
                  >
                    <div className="divImputPay">
                      <input
                        placeholder="Name"
                        type="text"
                        className="inputName"
                        name="name"
                        ref={nameRef}
                      />
                      <input
                        placeholder="Email"
                        type="text"
                        className="inputEmail"
                        name="email"
                        ref={emailRef}
                      />
                    </div>

                    <div className="contendorBoton">
                      <button type="submit">Pay</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
      <Footer />
    </>
  );
};
