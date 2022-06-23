import React from "react";
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

export const DataModalComputer = ({ item }) => {
  const { datas } = useContext(computerContext);
  console.log(item)

  const result = {
    name: datas.name,
    description: datas.description,
    marc: datas.marc,
    price: datas.price,
    priceDesc: datas.priceDesc,
    desc: datas.desc,
    star: datas.star,
    pic1: datas.pic1,
    pic2: datas.pic2,
    pic3: datas.pic3,
    pic4: datas.pic4
  };

  return (
    <>
      <div className="contaninerModal">
        <div className="bodyModal">
          <div className="containerImagenModal">
            <div className="img">
              <img src={result.pic1} alt="foto" className="imagenData" />
            </div>

            <div className="carrosusel">
              <img src={result.pic1} alt="pic" />
              <img src={item.pic2} alt="pic" />
              <img src={item.pic3} alt="pic" />
              <img src={item.pic4} alt="pic" />
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
            <p>Price: {result.price} </p>
            <p>Desc: {result.desc} </p>
            <p>PriceDesc: {result.priceDesc} </p>
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
