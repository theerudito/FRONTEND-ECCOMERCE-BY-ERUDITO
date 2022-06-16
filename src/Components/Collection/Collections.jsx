import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../Helpers/Data";

export const Collection = () => {
  return (
    <div className="collection">
      {CATEGORIES.map((item) => (
        <div className="bodyColections" key={item.id}>
          <div>
            <h1 className="titleCollection">{item.Title} </h1>
            <p className="infoColection">{item.desc} </p>
            <Link to={item.categogy}>
              <button className="buttonShop">SHOP NOW</button>
            </Link>
          </div>

          <div className="containerImageCollection">
            <img className="imageCollection" src={item.pic} alt="foto" />
          </div>
        </div>
      ))}
    </div>
  );
};
