import React from "react";
import { STORE } from "../Helpers/Data";

export const Cards = () => {
  let products = STORE[0].PRODUCTS.map((item) => [
    ...item.ACCESSORIES,
    ...item.LAPTOPS,
    ...item.COMPUTERS,
    ...item.HEADSET,
    ...item.KEYBOARDS,
    ...item.MONITOR,
  ]).reduce((a, b) => a.concat(b), []).slice(0, 12);

  return (
    <div className="contenedorCard">
      {products
        .map((item) => (
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
        ))
        .reduce((acc, item) => [...acc, item], [])}
    </div>
  );
};
