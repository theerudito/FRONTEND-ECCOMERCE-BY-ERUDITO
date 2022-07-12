import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Footer} from "../../Footer/Footer";
import {Header2} from "../../Header/Header2";
import {STORE} from "../../Helpers/Data";
import {useModal} from "../../CustomHooks/useModal";
import {Menu} from "../../Menu/Menu";
import {SocialMedia} from "../../SocialMedia/SocialMedia";
import {addCart, getCounter, getPriceTotal} from "../../../store/slices/cart";
import {ModalMore} from "../../Modals/ModalMore";
import {DataModalProducts} from "../../Modals/DataModal";
import {getHeadsets, getImageModal, oneHeadsetModal} from "../../../store/slices/products";
import {ModalImage} from "../../Modals/Modal-Image";
import {DataImage} from "../../Modals/DataImage";

export const Headset = () => {
  const [isOpenMore, openModalMore, closeModalMore] = useModal(false);
  const [isOpenImage, openModalImage, closeModalImage] = useModal(false);
  const dispatch = useDispatch();
  const { headsets = [] } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getHeadsets(STORE[0][1]));
  }, [dispatch]);

  const handleModal = (item) => {
    openModalMore();
    dispatch(oneHeadsetModal( item));
  };

  const AddCart = (item) => {
    dispatch(getPriceTotal(item.price));
    dispatch(addCart(item));
    dispatch(getCounter(1));
  };


    const openImage = (item) => {
        openModalImage()
        dispatch(getImageModal(item));
    }

  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <Menu />
      <h2 className="titlecategory">HEADSETS</h2>
      <div className="contenedorCard">
        {headsets.map((item) => (
          <div className="bodyCard" key={item._id}>
            <div className="containerImagen">
              <img className="imagenCard" src={item.pic1} alt="foto"  onClick={() => openImage(item)}/>

                <ModalImage isOpen={isOpenImage} closeModal={closeModalImage}>
                    <DataImage />
                </ModalImage>
            </div>

            <div className="containerInforCard">
              <div className="info">
                <h1 className="name">{item.name} </h1>
                <p className="description">{item.description} </p>
                <p className="marc">{item.marc} </p>
                <p className="starts">{item.star} </p>
              </div>

              <div className="containerInforPrice">
                <p className="price">{item.priceDesc} </p>
                <p className="offert">{item.price}</p>
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
                  <DataModalProducts  />
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
