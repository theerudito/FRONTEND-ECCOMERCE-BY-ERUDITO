import React from "react";
import { Card } from "../Helpers/Data";

export const Cards = () => {
  return (
    <div className="contenedorCard">
      {Card.map((item) => (
        <div className="bodyCard" key={item.id}>
          <div className="containerImagen">
            <img className="imagenCard" src={item.pic} alt="foto" />
          </div>

          <div className="containerInforCard">
            <h1 className="name">{item.name} </h1>
            <p className="description">{item.description} </p>
            <p className="starts">{item.star} </p>

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
