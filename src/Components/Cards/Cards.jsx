import React from "react";

export const Cards = () => {
  return (
    <div className="contenedorCard">
      <div className="bodyCard">
        <div className="containerImagen">
          <img
            className="imagenCard"
            src="https://placeimg.com/640/480/tech"
            alt=""
          />
        </div>

        <div className="containerInforCard">
          <h1 className="name">Skirt</h1>
          <p className="description">Skirt very nice</p>
          <p className="starts">****</p>

          <div className="containerInforPrice">
            <p className="price">$200.00</p>
            <p className="offert">$199.99</p>
            <p className="desc">-8%</p>
          </div>

          <div className="buttonsAdd">
            <button className="buttoAddCart">ADD TO CART</button>
            <button className="moreInfo">MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
