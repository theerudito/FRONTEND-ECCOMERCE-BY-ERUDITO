import { useContext, useEffect } from "react";
import { useModal } from "../../CustomHooks/useModal";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import { Header2 } from "../../Header/Header2";
import { Loader } from "../../Loaders/LoadersCards";
import { Menu } from "../../Menu/Menu";
import { DataModalComputer } from "../../Modals/DataModal";

import { ModalMore } from "../../Modals/ModalMore";
import computerContext from "../../Providers/ProviderComputer";
import { SocialMedia } from "../../SocialMedia/SocialMedia";

export const Computers = () => {
  const [isOpenMore, openModalMore, closeModalMore] = useModal(false);
  const { computer, getComputer, getOneComputer, loader, addCart } =
    useContext(computerContext);

  useEffect(() => {
    setTimeout(() => {
      getComputer();
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <Header2 />
      <Menu />
      <h2 className="titlecategory">COMPUTERS </h2>
      <div className="contenedorCard">
        {computer.length > 0 ? (
          computer.map((item) => (
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
                  <p className="desc">{item.desc}% </p>
                </div>

                <div className="buttonsAdd">
                  <button
                    className="buttoAddCart"
                    onClick={() => addCart(getOneComputer(item.id, item))}
                  >
                    ADD TO CART
                  </button>
                  <button
                    className="moreInfo"
                    onClick={() =>
                      openModalMore(getOneComputer(item._id, item))
                    }
                  >
                    MORE
                  </button>

                  <ModalMore isOpen={isOpenMore} closeModal={closeModalMore}>
                    <DataModalComputer item={item} />
                  </ModalMore>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>{loader && <Loader />}</div>
        )}
      </div>
      <SocialMedia />
      <Footer />
    </>
  );
};
