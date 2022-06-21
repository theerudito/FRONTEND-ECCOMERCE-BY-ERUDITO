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
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Info
            </p>
            <p>Nombre: Lapto545454545454544554455454545</p>
            <p>Descripcion: 15 Pulgadas </p>
            <p>Marca: HP </p>
          </div>

          <div className="containerPrices">
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Price{" "}
            </p>
            <p>Price: 200 </p>
            <p>Desc: 8% </p>
            <p>Offer: 180 </p>
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
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Info
            </p>
            <p>Nombre: Lapto545454545454544554455454545</p>
            <p>Descripcion: 15 Pulgadas </p>
            <p>Marca: HP </p>
          </div>

          <div className="containerPrices">
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Price{" "}
            </p>
            <p>Price: 200 </p>
            <p>Desc: 8% </p>
            <p>Offer: 180 </p>
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
