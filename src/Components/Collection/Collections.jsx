import React from "react";
import { Collection1 } from "../Helpers/Data";
import { Link } from "react-router-dom";
import { RoutesApps } from "../Router/Routers";

export const Collection = () => {
  return (
    <div className="collection">
      {Collection1.map((item) => (
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
