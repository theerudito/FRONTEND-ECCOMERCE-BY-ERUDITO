import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { COLECTIONS } from "../Helpers/Data";
import {getCollection} from "../../store/slices/products";

export const Collection = () => {
  const dispatch = useDispatch();
  const { collection = [] } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCollection(COLECTIONS));
  }, [dispatch]);

  return (
    <div className="collection">
      {collection.map((item) => (
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
