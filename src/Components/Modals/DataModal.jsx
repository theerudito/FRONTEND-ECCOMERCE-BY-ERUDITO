import React from "react";

export const DataModalBody = ({ item }) => {
  return (
    <>
      <div className="contaninerModal">
        <div className="bodyModal">
          <div className="containerImagenModal">
            <div className="img">
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="foto"
                className="imagenData"
              />
            </div>
            <div className="carrosusel">
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="pic"
              />
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="pic"
              />
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="pic"
              />
              <img
                src="https://avatars.dicebear.com/api/micah/weds.svg"
                alt="pic"
              />
            </div>
          </div>
          <div className="containerInfor">

            <span className="pri">Info</span>
            <p>Nombre: Lapto</p>
            <p>Descripcion: 15 Pulgadas </p>
            <p>Marca: HP </p>
          </div>
          <div className="containerPrices">
            <p className="pri">Precio</p>
            <p>Price: 200 </p>
            <p>Desc: 8% </p>
            <p>Offer: 180 </p>
            <p>Quantity</p>

            <div className="botons">
              <input type="number" placeholder="1" />
              <button>-</button>
              <button>+</button>
            </div>

            <div className="contenedorBoton">
              <button>Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const DataModalComputer = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="contaninerModal">
        <div className="bodyModal">
          <div className="containerImagenModal">
            <div className="img">
              <img src={item.pic} alt="foto" className="imagenData" />
            </div>
            <div className="carrosusel">
              <img src={item.pic} alt="pic" />
              <img src={item.pic} alt="pic" />
              <img src={item.pic} alt="pic" />
              <img src={item.pic} alt="pic" />
            </div>
          </div>
          <div className="containerInfor">
            Info
            <p>Nombre: {item.name} </p>
            <p>Descripcion: {item.description} </p>
            <p>Marca: HP {item.marc} </p>
          </div>
          <div className="containerPrices">
            Precio
            <p>Price: {item.price} </p>
            <p>Desc: {item.desc} </p>
            <p>Offer: {item.priceDesc} </p>
            <p>Quantity</p>
            <input type="number" placeholder="1" />
            <button>-</button>
            <button>+</button>
            <div className="contenedorBoton">
              <button>Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
