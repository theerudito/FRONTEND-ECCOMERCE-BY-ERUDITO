import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../store/slices/account/account";
import { LoginAPI } from "../Helpers/Api";
import { RoutesApps } from "../Router/Routers";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //const { data } = useSelector((state) => state.account);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataForm = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const dataUser = await LoginAPI(dataForm);
    console.log(dataUser);
  };

  return (
    <>
      <article className="containerDataLoginUser">
        <div className="containerLogoLogin">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
            alt="logo"
            className="logoLogin"
          />
        </div>

        <div className="containerLogin">
          <p>Welcome </p>
          <form onClick={handleSubmit}>
            <input ref={emailRef} type="text" placeholder="User" />
            <input ref={passwordRef} type="password" placeholder="Password" />

            <button>Login</button>
          </form>
        </div>
      </article>
    </>
  );
};
