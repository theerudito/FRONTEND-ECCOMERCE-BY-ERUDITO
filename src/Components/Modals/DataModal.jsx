import React, { useState } from "react";
import { useContext } from "react";
import computerContext from "../Providers/ProviderComputer";

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

export const DataModalComputer = () => {
  const { datas, counter, setCounter, handleSum, handleRes, addCart } =
    useContext(computerContext);

  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");

  const result = {
    name: datas.name,
    description: datas.description,
    marc: datas.marc,
    price: parseFloat(Number(datas.price).toFixed(2)),
    priceDesc: parseFloat(Number(datas.priceDesc).toFixed(2)),
    desc: datas.desc + "%",
    star: datas.star,
    pic1: datas.pic1,
    pic2: datas.pic2,
    pic3: datas.pic3,
    pic4: datas.pic4,
  };

  const addImage = (image) => {
    let newImgen = image;
    setImage(false);
    setChangeImage(newImgen);
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
              onChange={(e) => setCounter(e.target.value)}
            />

            <button onClick={handleRes}>-</button>
            <button onClick={handleSum}>+</button>

            <div className="contenedorBoton">
              <button onClick={() =>  addCart(datas)}>Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
