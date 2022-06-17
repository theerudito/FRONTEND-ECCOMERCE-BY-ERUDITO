import React from "react";

export const DataModal = () => {
  return (
    <>
      <div className="contaninerModal">
        <div className="bodyModal">
          <div className="containerImagenModal">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Ecommers%2Fkeyboard%2F1.png?alt=media&token=4a5e67d6-609a-4708-868e-3051b57197e3"
              alt="foto"
              className="imagenData"
            />
            <div className="carrosusel">
              <p>Image1</p>
              <p>Image2</p>
              <p>Image3</p>
              <p>Image4</p>
            </div>
          </div>
          <div className="containerInfor">
            Info
            <p>Nombre: Keyboard</p>
            <p>Descripcion: Teclado</p>
            <p>Marca: Logitech</p>
          </div>
          <div className="containerPrices">
            Precio
            <p>Price: $100</p>
            <p>Desc: $80</p>
            <p>Offer: $50</p>
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
