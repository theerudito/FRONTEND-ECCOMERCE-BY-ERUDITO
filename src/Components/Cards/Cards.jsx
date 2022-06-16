import React from "react";
import { STORE } from "../Helpers/Data";

export const Cards = () => {
  //console.log(STORE[0]);

  let numRamdom = [0, 2, 3, 4, 5];

  let ramdom = Math.floor(Math.random() * numRamdom.length);

  return (
    <div className="contenedorCard">
      {STORE[0][ramdom].map((item) => (
        <div className="bodyCard" key={item.id}>
          <div className="containerImagen">
            <img className="imagenCard" src={item.pic} alt="foto" />
          </div>

          <div className="containerInforCard">
            <div className="info">
              <h1 className="name">{item.name} </h1>
              <p className="description">{item.description} </p>
              <p className="marc">{item.marc} </p>
              <p className="starts">{item.star} </p>
            </div>

            <div className="containerInforPrice">
              <p className="price">{item.price} </p>
              <p className="offert">{item.priceDesc}</p>
              <p className="desc">{item.desc} </p>
            </div>

            <div className="buttonsAdd">
              <button className="buttoAddCart">ADD TO CART</button>
              <button className="moreInfo">MORE</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
