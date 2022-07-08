import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeasets } from "../../../store/slices/heasets/heasets";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import { Header2 } from "../../Header/Header2";
import { STORE } from "../../Helpers/Data";
import { useModal } from "../../CustomHooks/useModal";
import { Menu } from "../../Menu/Menu";
import { SocialMedia } from "../../SocialMedia/SocialMedia";
import { addCart } from "../../../store/slices/cart/cart";
import { ModalMore } from "../../Modals/ModalMore";
import { DataModalComputer } from "../../Modals/DataModal";

export const Headset = () => {
  const [isOpenMore, openModalMore, closeModalMore] = useModal(false);
  const dispatch = useDispatch();
  const { heasets = [] } = useSelector((state) => state.heasets);

  useEffect(() => {
    dispatch(getHeasets(STORE[0][1]));
  }, [dispatch]);

  const handleModal = (item) => {
    openModalMore();
    //dispatch((item));
  };

  const AddCart = (item) => {
    //dispatch(getPriceTotal(item.price));
    dispatch(addCart(item));
    //dispatch(getCounter(1));
  };

  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <Menu />
      <h2 className="titlecategory">HEADSETS</h2>
      <div className="contenedorCard">
        {heasets.map((item) => (
          <div className="bodyCard" key={item.id}>
            <div className="containerImagen">
              <img className="imagenCard" src={item.pic1} alt="foto" />
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
                <button className="buttoAddCart" onClick={() => AddCart(item)}>
                  ADD TO CART
                </button>
                <button className="moreInfo" onClick={() => handleModal(item)}>
                  MORE
                </button>

                <ModalMore isOpen={isOpenMore} closeModal={closeModalMore}>
                  <DataModalComputer item={item} />
                </ModalMore>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SocialMedia />
      <Footer />
    </>
  );
};
