import { useContext } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Header2 } from "../Header/Header2";
import { Menu } from "../Menu/Menu";
import computerContext from "../Providers/ProviderComputer";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Cart = () => {
  const data = useContext(computerContext);
  const [cart, setCart] = data.carrito;
  const valorTotal = data.valorTotal;
  const total = data.totalCart;
  const acuCant = data.acuCant;
  const pay = data.pay;
  const handleChange = data.handleChange;
  const [user] = data.user;

  const deleteCart = (itemId) => {
    const borrar = cart.filter((item) => item._id !== itemId);
    setCart(borrar);
    console.log("borrando");
  };

  return (
    <>
      <Header />
      <Header2 />
      <Menu />
      <div className="contenedorP">
        <div className="containerPayment">
          <div className="details">
            <p className="cant">Cant</p>
            <p className="name">Name</p>
            <p className="priceUnitary">Price/Unit</p>
            <p className="priceTotal">Price/Total</p>
            <p className="action">Action</p>
          </div>

          {cart.map((item) => (
            <div className="containerInfoPago" key={item._id}>
              <p className="cant">{acuCant}</p>
              <p className="name">
                {item.name} {item.description} {item.marc}
              </p>
              <p className="priceUnitary"> {item.price} </p>
              <p className="priceTotal">{valorTotal}</p>
              <span onClick={() => deleteCart(item._id)}>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </div>
          ))}

          <div className="containerTotals">
            <div className="total">
              <p>Total: {total} </p>
            </div>

            <div className="contenderBody">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
                alt="logo"
              />
              <div className="dataUser">
                <form onSubmit={pay}>
                  <input
                    placeholder="Name"
                    type="text"
                    className="inputName"
                    required
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    className="inputEmail"
                    required
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <div className="contendorBoton">
                    <button type="submit">Pay</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
      <Footer />
    </>
  );
};
