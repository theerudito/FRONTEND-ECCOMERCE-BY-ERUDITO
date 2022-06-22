import React, { useState } from "react";
import { createContext } from "react";
import { GetAllComputer, GetOneComputer } from "../Helpers/Api";

const computerContext = createContext();

const ProviderComputer = ({ children }) => {
  const [computer, setComputer] = useState([]);
  const [datas, setDatas] = useState([]);
  

  const getComputer = async () => {
    const computer = await GetAllComputer();
    setComputer(computer);
  };

  const getOneComputer = async (id, item) => {
    await GetOneComputer(id);
    console.log("obtenido");
    const dato = {
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
      pic4: item.pic4
    };

    setDatas(dato);
  };

  const data = {
    computer,
    setComputer,
    getComputer,
    getOneComputer,
    datas,
  };

  return (
    <computerContext.Provider value={data}>{children}</computerContext.Provider>
  );
};

export { ProviderComputer };

export default computerContext;
