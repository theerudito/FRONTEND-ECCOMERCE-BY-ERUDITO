import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  getCounter,
  getPriceTotal,
} from "../../store/slices/cart/cart";
import { getproducts } from "../../store/slices/products";
import { useModal } from "../CustomHooks/useModal";
import { STORE } from "../Helpers/Data";
import { DataModalBody } from "../Modals/DataModal";
import { ModalMore } from "../Modals/ModalMore";

export const Cards = () => {
  //console.log(STORE[0]);
  const [isOpenMore, openModalMore, closeModalMore] = useModal(false);

  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.products);

  // useEffect(() => {
  //   GetAllComputerApi().then((res) => {
  //     dispatch(getComputer(res));
  //   });
  // }, [dispatch]);

  const handleModal = (item) => {
    openModalMore();
    //dispatch(oneComputer(item));
  };

  const AddCart = (item) => {
    dispatch(getPriceTotal(item.price));
    dispatch(addCart(item));
    dispatch(getCounter(1));
  };

  let numRamdom = [0, 2, 3, 4, 5];
  let ramdom = Math.floor(Math.random() * numRamdom.length);

  useEffect(() => {
    dispatch(getproducts(STORE[0][ramdom]));
  }, [dispatch]);

  return (
    <div className="contenedorCard">
      {products.map((item) => (
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
              <button className="moreInfo" onClick={() => handleModal()}>
                MORE
              </button>

              <ModalMore isOpen={isOpenMore} closeModal={closeModalMore}>
                <DataModalBody />
              </ModalMore>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
