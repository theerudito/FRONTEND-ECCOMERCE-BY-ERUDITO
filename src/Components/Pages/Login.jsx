import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../store/slices/account/account";
import { Footer } from "../Footer/Footer";
import { RoutesApps } from "../Router/Routers";

export const Login = () => {

  const dispatch = useDispatch();
  const userRef = useRef();

  const passwordRef = useRef();

  const navigate = useNavigate();

  const {data} = useSelector((state) => state.account);



  const handleSubmit = (e) => {
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();
    dispatch(getUser({ user, password }));

    if (data.user === user && data.password === password) {
      navigate("/account");
    } 
  };



  return (
    <>
      <div className="principalContainer">
        <article className="containerLogo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
            alt="logo"
          />
        </article>

        <article className="containerForm">
          <form onClick={handleSubmit}>
            <input
              ref={userRef}
              type="text"
              placeholder="user"
              name="Username"
              required
            />

            <input
              ref={passwordRef}
              type="password"
              placeholder="password"
              name="Password"
              required
            />

            <button type="submit">Login </button>
          </form>
        </article>

        <article className="containerRegister">
          <p>Don't have an account?</p>
          <Link to={RoutesApps.register} className="Link">
            <button>Sing up</button>
          </Link>
        </article>
      </div>
      <br />
      <Footer />
    </>
  );
};
