import React from "react";
import { Collection1 } from "../Helpers/Data";

export const Collection = () => {
  return (
    <div className="collection">
      {Collection1.map((item) => (
        <div className="bodyColections">
          <div>
            <h1 className="titleCollection">{item.Title} </h1>
            <p className="infoColection">{item.desc} </p>
            <button className="buttonShop">SHOP NOW</button>
          </div>

          <div className="containerImageCollection">
            <img className="imageCollection" src={item.pic} alt="" />
          </div>

        </div>
      ))}
    </div>
  );
};
