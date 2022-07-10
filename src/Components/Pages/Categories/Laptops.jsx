import React, {useEffect} from "react";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import { Header2 } from "../../Header/Header2";
import { STORE } from "../../Helpers/Data";
import { Menu } from "../../Menu/Menu";
import { SocialMedia } from "../../SocialMedia/SocialMedia";
import {useModal} from "../../CustomHooks/useModal";
import {useDispatch, useSelector} from "react-redux";
import {addCart, getCounter, getPriceTotal} from "../../../store/slices/cart";
import {ModalMore} from "../../Modals/ModalMore";
import {DataModalProducts} from "../../Modals/DataModal";
import {getLaptops, oneLaptopModal} from "../../../store/slices/products";


export const Laptops = () => {
    const [isOpenMore, openModalMore, closeModalMore] = useModal(false);
    const dispatch = useDispatch();

    const { laptops = [], isLoading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getLaptops(STORE[0][2]));
    }, [dispatch]);

    const handleModal = (item) => {
        openModalMore();
        dispatch(oneLaptopModal( item));
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
      <h2 className="titlecategory">LAPTOPS</h2>
      <div className="contenedorCard">
        {laptops.map((item) => (
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
                <p className="price">{item.price} </p>
                <p className="offert">{item.priceDesc}</p>
                <p className="desc">{item.desc} </p>
              </div>

              <div className="buttonsAdd">
                <button className="buttoAddCart" onClick={() => AddCart(item)}>ADD TO CART</button>
                <button className="moreInfo" onClick={() => handleModal(item)}>MORE</button>

                  <ModalMore isOpen={isOpenMore} closeModal={closeModalMore}>
                      <DataModalProducts />
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
