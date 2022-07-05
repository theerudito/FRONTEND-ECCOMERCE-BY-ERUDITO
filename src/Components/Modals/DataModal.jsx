import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import computerContext from "../Providers/ProviderComputer";
import { addCart, getCounter } from "../../store/slices/cart/cart";
import { useEffect } from "react";
import { GetOneComputerApi } from "../Helpers/Api";
import {
  decrement,
  getComputer,
  getOneComputer,
  increment,
} from "../../store/slices/computer/computer";

export const DataModalBody = ({ item }) => {
  return (
    <>
      <div className="contaninerModal">
        <div className="bodyModal">
          <div className="containerImagenModal">
            <div className="img">
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="foto"
                className="imagenData"
              />
            </div>
            <div className="carrosusel">
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="pic"
              />
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="pic"
              />
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="pic"
              />
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="pic"
              />
            </div>
          </div>

          <div className="containerInfor">
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Info
            </p>
            <p>Nombre: Lapto545454545454544554455454545</p>
            <p>Descripcion: 15 Pulgadas </p>
            <p>Marca: HP </p>
          </div>

          <div className="containerPrices">
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Price{" "}
            </p>
            <p>Price: 200 </p>
            <p>Desc: 8% </p>
            <p>Offer: 180 </p>
            <p>Quantity</p>

            <input type="number" placeholder="1" />
            <button>-</button>
            <button>+</button>

            <div className="contenedorBoton">
              <button>Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const DataModalComputer = ({ item }) => {
  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");

  const dispatch = useDispatch();
  const { oneComputer, counter } = useSelector((state) => state.computers);

  const result = {
    name: oneComputer.name,
    description: oneComputer.description,
    marc: oneComputer.marc,
    price: parseFloat(Number(oneComputer.price).toFixed(2)),
    priceDesc: parseFloat(Number(oneComputer.priceDesc).toFixed(2)),
    desc: oneComputer.desc + "%",
    star: oneComputer.star,
    pic1: oneComputer.pic1,
    pic2: oneComputer.pic2,
    pic3: oneComputer.pic3,
    pic4: oneComputer.pic4,
  };

  const addImage = (image) => {
    let newImgen = image;
    setImage(false);
    setChangeImage(newImgen);
  };

  //const { counter } = useSelector((state) => state.cart);

  const AddCart = (oneComputer) => {
    dispatch(addCart(oneComputer));
    dispatch(getCounter());
  };

  return (
    <>
      <div className="contaninerModal">
        <div className="bodyModal">
          <div className="containerImagenModal">
            <div className="img">
              <img
                src={image ? result.pic1 : changeImage}
                alt="foto"
                className="imagenData"
              />
            </div>

            <div className="carrosusel">
              <img
                src={result.pic1}
                alt="pic"
                onClick={() => addImage(result.pic1)}
              />
              <img
                src={result.pic2}
                alt="pic"
                onClick={() => addImage(result.pic2)}
              />
              <img
                src={result.pic3}
                alt="pic"
                onClick={() => addImage(result.pic3)}
              />
              <img
                src={result.pic4}
                alt="pic"
                onClick={() => addImage(result.pic4)}
              />
            </div>
          </div>

          <div className="containerInfor">
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Info
            </p>
            <p>Nombre: {result.name} </p>
            <p>Descripcion: {result.description} </p>
            <p>Marca: HP {result.marc} </p>
            <p>Stars {result.star} </p>
          </div>

          <div className="containerPrices">
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Price{" "}
            </p>
            <p>Price: {parseFloat(result.price).toFixed(2)} </p>
            <p>Desc: {result.desc} </p>
            <p>PriceDesc: {parseFloat(result.priceDesc).toFixed(2)} </p>
            <p>Quantity</p>
            <input
              type="number"
              placeholder="0"
              value={counter}
              onChange={(e) => counter(e.target.value)}
            />

            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>

            <div className="contenedorBoton">
              <button onClick={() => AddCart(oneComputer)}>Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
