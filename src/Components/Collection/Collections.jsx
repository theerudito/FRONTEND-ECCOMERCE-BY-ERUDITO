import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getColection } from "../../store/slices/colection";
import { COLECTIONS } from "../Helpers/Data";

export const Collection = () => {
  const dispatch = useDispatch();
  const { colection = [] } = useSelector((state) => state.colections);

  useEffect(() => {
    dispatch(getColection(COLECTIONS));
  }, [dispatch]);

  return (
    <div className="collection">
      {colection.map((item) => (
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
