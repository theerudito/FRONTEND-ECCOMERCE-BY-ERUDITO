import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Footer} from "../../Footer/Footer";
import {Header2} from "../../Header/Header2";
import {STORE} from "../../Helpers/Data";
import {Menu} from "../../Menu/Menu";
import {SocialMedia} from "../../SocialMedia/SocialMedia";
import {addCart, getCounter, getPriceTotal} from "../../../store/slices/cart";
import {ModalMore} from "../../Modals/ModalMore";
import {DataModalProducts} from "../../Modals/DataModal";
import {useModal} from "../../CustomHooks/useModal";
import {getKeyboards, oneKeyboardModal} from "../../../store/slices/products";

export const Keyboards = () => {
    const [isOpenMore, openModalMore, closeModalMore] = useModal(false);
  const dispatch = useDispatch();
  const { keyboards = [] } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getKeyboards(STORE[0][4]));
  }, [dispatch]);


    const handleModal = (item) => {
        openModalMore();
        dispatch(oneKeyboardModal( item));
    };

    const AddCart = (item) => {
        dispatch(getPriceTotal(item.price));
        dispatch(addCart(item));
        dispatch(getCounter(1));
    };

  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <Menu />
      <h2 className="titlecategory">KEYBOARDS </h2>
      <div className="contenedorCard">
        {keyboards.map((item) => (
          <div className="bodyCard" key={item._id}>
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
                <p className="price">{item.priceDesc} </p>
                <p className="offert">{item.price}</p>
                <p className="desc">{item.desc} </p>
              </div>

              <div className="buttonsAdd">
                <button className="buttoAddCart" onClick={() => AddCart(item)}>ADD TO CART</button>
                <button className="moreInfo" onClick={() => handleModal(item)} >MORE</button>

                  <ModalMore  isOpen={isOpenMore} closeModal={closeModalMore}>
                      <DataModalProducts/>
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
