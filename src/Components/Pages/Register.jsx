import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, goLogin } from "../../store/slices/account/account";
import { RegisterAPI } from "../Helpers/Api";
import { RoutesApps } from "../Router/Routers";

export const Register = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: imput }) => {
    setData({ ...data, [imput.name]: imput.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToken = await RegisterAPI(data);
    dispatch(getUser(localStorage.setItem("token", JSON.stringify(dataToken))));
    navigate(RoutesApps.account);
    window.location.reload();
  };

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
          <form onSubmit={handleSubmit}>
            <input
              value={data.name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
              value={data.email}
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Email"
            />
            <input
              value={data.password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />

            <button type="submit">Register</button>
            <button type="submit" onClick={() => dispatch(goLogin(true))}>
              Login
            </button>
          </form>
        </div>
      </article>
    </>
  );
};
