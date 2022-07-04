import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { GetAllComputerApi } from "../Helpers/Api";

import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

const computerContext = createContext();

const ProviderComputer = ({ children }) => {
  const [computer, setComputer] = useState([]);
  const [datas, setDatas] = useState([]);

  //======LOADERS================================
  const [loader] = useState(true);
  //======LOADERS================================

  //=======COUNTERS==============================
  const [counter, setCounter] = useState(0);
  const handleSum = () => setCounter(counter + 1);
  const handleRes = () => setCounter(counter - 1);

  //=======COUNTERS==============================

  //=======CART==================================
  const [cart, setCart] = useState([]);
  const [cant, setCant] = useState(0);
  const [vTotal, setVtotal] = useState([]);
  const [acuCant, setAcuCant] = useState(0);
  const [user, setUser] = useState({ name: "", email: "" });

  const pay = (e) => {
    e.preventDefault();
    Swal.fire(
      `Thanks for your purchase ${user.name}!`,
      "You clicked the button!",
      "success"
    );
    setCart([]);
    setUser({ name: "", email: "" });
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;
    const email = target.email;
    setUser({ ...user, [name]: value, [email]: value });
  };

  const addCart = (item) => {
    console.log(item._id);
    let id = item._id;
    const check = cart.every((item) => {
      return item._id !== id;
    });

    if (check) {
      const products = computer.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...products]);
      setCant(cant + 1);
      setAcuCant(acuCant + 1);
    } else {
      setCant(cant + 1);
      setAcuCant(acuCant + 1);
    }
    console.log(check);
  };

  const valorTotal = cart.reduce((acc, item) => {
    return acc + Number(item.price) * cant;
  }, 0);

  const total = cart
    .map((item) => Number(Number(item.price)) * Number(cant))
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    setVtotal(vTotal, valorTotal, total);
  }, [vTotal, valorTotal, total]);
  //=======CART==================================

  const getComputer = async () => {
    const computer = await GetAllComputerApi();
    setComputer(computer);
  };

  const getOneComputer = (item) => {
    const dato = {
      _id: item._id,
      name: item.name,
      description: item.description,
      adictional: item.adictional,
      marc: item.marc,
      price: item.price,
      priceDesc: item.priceDesc,
      desc: item.desc,
      star: item.star,
      pic1: item.pic1,
      pic2: item.pic2,
      pic3: item.pic3,
      pic4: item.pic4,
      priceTotal: item.priceTotal,
      total: item.total,
    };

    setDatas(dato);
  };

  const data = {
    computer: [computer, setComputer],
    getComputer: getComputer,
    getOneComputer: getOneComputer,
    datas,
    loader: [loader],

    counter,
    setCounter,

    handleSum,
    handleRes,

    // add Cart
    carrito: [cart, setCart],
    addCart: addCart,
    total: [vTotal, setVtotal],
    valorTotal: valorTotal,
    totalCart: total,
    acuCant: acuCant,

    // pay
    pay: pay,

    // user
    user: [user, setUser],

    // handleChange
    handleChange: handleChange,
  };

  return (
    <computerContext.Provider value={data}>{children}</computerContext.Provider>
  );
};

export { ProviderComputer };

export default computerContext;
