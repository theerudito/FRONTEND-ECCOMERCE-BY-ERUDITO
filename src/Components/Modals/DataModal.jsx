import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCart, getCounter} from "../../store/slices/cart";

export const DataModalProducts = () => {
  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const { oneProduct } = useSelector((state) => state.products);
  const { counter } = useSelector((state) => state.cart);
  const inputRef = useRef(1);

    const result = {
    name: oneProduct.name,
    description: oneProduct.description,
    marc: oneProduct.marc,
    price: parseFloat(Number(oneProduct.price).toFixed(2)),
    priceDesc: parseFloat(Number(oneProduct.priceDesc).toFixed(2)),
    desc: oneProduct.desc + "%",
    star: oneProduct.star,
    pic1: oneProduct.pic1,
    pic2: oneProduct.pic2,
    pic3: oneProduct.pic3,
    pic4: oneProduct.pic4,
  };

  const addImage = (image) => {
    let newImgen = image;
    setImage(false);
    setChangeImage(newImgen);
  };

  const AddCart = (oneProduct) => {
    const value = Number(inputRef.current.value);
    dispatch(addCart(oneProduct));
    dispatch(getCounter(value));
  };

  const sum = () => {
    setInput(input + 1);
  };

  const res = () => {
    setInput(input - 1);
  };
  return (
      <>
        <div className="contaninerModal">
          <div className="bodyModal">
            <div className="containerImagenModal">
              <div className="img">
                <img
                    src={image ? result.pic1 : changeImage}
                    alt="foto"
                    className="imagenData"
                />
              </div>

              <div className="carrosusel">
                <img
                    src={result.pic1 || result.pic1}
                    alt="pic"
                    onClick={() => addImage(result.pic1)}
                />
                <img
                    src={result.pic2}
                    alt="pic"
                    onClick={() => addImage(result.pic2)}
                />
                <img
                    src={result.pic3}
                    alt="pic"
                    onClick={() => addImage(result.pic3)}
                />
                <img
                    src={result.pic4}
                    alt="pic"
                    onClick={() => addImage(result.pic4)}
                />
              </div>
            </div>

            <div className="containerInfor">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Info
              </p>
              <p>Nombre: {result.name} </p>
              <p>Descripcion: {result.description} </p>
              <p>Marca: HP {result.marc} </p>
              <p>Stars {result.star} </p>
            </div>

            <div className="containerPrices">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Price{" "}
              </p>
              <p className="price">Price: {parseFloat(result.price).toFixed(2)} </p>
              <p>Desc: {result.desc} </p>
              <p>PriceDesc: {parseFloat(result.priceDesc).toFixed(2)} </p>
              <p>Quantity</p>

              <input
                  ref={inputRef}
                  type="number"
                  placeholder={input}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              />

              <button onClick={() => res()}>-</button>
              <button onClick={() => sum()}>+</button>

              <div className="contenedorBoton">
                <button onClick={() => AddCart(oneProduct)}>Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export const DataModalComputer = () => {
  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const { oneComputer } = useSelector((state) => state.computers);
  const { counter } = useSelector((state) => state.cart);
  const imputRef = useRef(1);

  const result = {
    name: oneComputer.name,
    description: oneComputer.description,
    marc: oneComputer.marc,
    price: parseFloat(Number(oneComputer.price).toFixed(2)),
    priceDesc: parseFloat(Number(oneComputer.priceDesc).toFixed(2)),
    desc: oneComputer.desc + "%",
    star: oneComputer.star,
    pic1: oneComputer.pic1,
    pic2: oneComputer.pic2,
    pic3: oneComputer.pic3,
    pic4: oneComputer.pic4,
  };

  const addImage = (image) => {
    let newImgen = image;
    setImage(false);
    setChangeImage(newImgen);
  };

  const AddCart = (oneComputer) => {
    const value = Number(imputRef.current.value);
    dispatch(addCart(oneComputer));
    dispatch(getCounter(value));
  };

  const sum = () => {
    setInput(input + 1);
  };

  const res = () => {
    setInput(input - 1);
  };

  return (
    <>
      <div className="contaninerModal">
        <div className="bodyModal">
          <div className="containerImagenModal">
            <div className="img">
              <img
                src={image ? result.pic1 : changeImage}
                alt="foto"
                className="imagenData"
              />
            </div>

            <div className="carrosusel">
              <img
                src={result.pic1}
                alt="pic"
                onClick={() => addImage(result.pic1)}
              />
              <img
                src={result.pic2}
                alt="pic"
                onClick={() => addImage(result.pic2)}
              />
              <img
                src={result.pic3}
                alt="pic"
                onClick={() => addImage(result.pic3)}
              />
              <img
                src={result.pic4}
                alt="pic"
                onClick={() => addImage(result.pic4)}
              />
            </div>
          </div>

          <div className="containerInfor">
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Info
            </p>
            <p>Nombre: {result.name} </p>
            <p>Descripcion: {result.description} </p>
            <p>Marca: HP {result.marc} </p>
            <p>Stars {result.star} </p>
          </div>

          <div className="containerPrices">
            <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
              Price{" "}
            </p>
            <p>Price: {parseFloat(result.price).toFixed(2)} </p>
            <p>Desc: {result.desc} </p>
            <p>PriceDesc: {parseFloat(result.priceDesc).toFixed(2)} </p>
            <p>Quantity</p>

            <input
              ref={imputRef}
              type="number"
              placeholder={input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={() => res()}>-</button>
            <button onClick={() => sum()}>+</button>

            <div className="contenedorBoton">
              <button onClick={() => AddCart(oneComputer)}>Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export const DataModalHeadsets = () => {
  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const { oneHeadset } = useSelector((state) => state.headsets);
  const { counter } = useSelector((state) => state.cart);
  const inputRef = useRef(1);


  const result = {
    name: oneHeadset.name,
    description: oneHeadset.description,
    marc: oneHeadset.marc,
    price: parseFloat(Number(oneHeadset.price).toFixed(2)),
    priceDesc: parseFloat(Number(oneHeadset.priceDesc).toFixed(2)),
    desc: oneHeadset.desc + "%",
    star: oneHeadset.star,
    pic1: oneHeadset.pic1,
    pic2: oneHeadset.pic2,
    pic3: oneHeadset.pic3,
    pic4: oneHeadset.pic4,
  };

  const addImage = (image) => {
    let newImgen = image;
    setImage(false);
    setChangeImage(newImgen);
  };

  const AddCart = (oneHeadset) => {
    const value = Number(inputRef.current.value);
    dispatch(addCart(oneHeadset));
    dispatch(getCounter(value));
  };

  const sum = () => {
    setInput(input + 1);
  };

  const res = () => {
    setInput(input - 1);
  };
  return (
      <>
        <div className="contaninerModal">
          <div className="bodyModal">
            <div className="containerImagenModal">
              <div className="img">
                <img
                    src={image ? result.pic1 : changeImage}
                    alt="foto"
                    className="imagenData"
                />
              </div>

              <div className="carrosusel">
                <img
                    src={result.pic1}
                    alt="pic"
                    onClick={() => addImage(result.pic1)}
                />
                <img
                    src={result.pic2}
                    alt="pic"
                    onClick={() => addImage(result.pic2)}
                />
                <img
                    src={result.pic3}
                    alt="pic"
                    onClick={() => addImage(result.pic3)}
                />
                <img
                    src={result.pic4}
                    alt="pic"
                    onClick={() => addImage(result.pic4)}
                />
              </div>
            </div>

            <div className="containerInfor">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Info
              </p>
              <p>Nombre: {result.name} </p>
              <p>Descripcion: {result.description} </p>
              <p>Marca: HP {result.marc} </p>
              <p>Stars {result.star} </p>
            </div>

            <div className="containerPrices">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Price{" "}
              </p>
              <p>Price: {parseFloat(result.price).toFixed(2)} </p>
              <p>Desc: {result.desc} </p>
              <p>PriceDesc: {parseFloat(result.priceDesc).toFixed(2)} </p>
              <p>Quantity</p>

              <input
                  ref={inputRef}
                  type="number"
                  placeholder={input}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              />

              <button onClick={() => res()}>-</button>
              <button onClick={() => sum()}>+</button>

              <div className="contenedorBoton">
                <button onClick={() => AddCart(oneHeadset)}>Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export const DataModalLaptops = () => {
  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const { oneLaptop } = useSelector((state) => state.laptops);
  const { counter } = useSelector((state) => state.cart);
  const inputRef = useRef(1);


  const result = {
    name: oneLaptop.name,
    description: oneLaptop.description,
    marc: oneLaptop.marc,
    price: parseFloat(Number(oneLaptop.price).toFixed(2)),
    priceDesc: parseFloat(Number(oneLaptop.priceDesc).toFixed(2)),
    desc: oneLaptop.desc + "%",
    star: oneLaptop.star,
    pic1: oneLaptop.pic1,
    pic2: oneLaptop.pic2,
    pic3: oneLaptop.pic3,
    pic4: oneLaptop.pic4,
  };

  const addImage = (image) => {
    let newImgen = image;
    setImage(false);
    setChangeImage(newImgen);
  };

  const AddCart = (oneProduct) => {
    const value = Number(inputRef.current.value);
    dispatch(addCart(oneProduct));
    dispatch(getCounter(value));
  };

  const sum = () => {
    setInput(input + 1);
  };

  const res = () => {
    setInput(input - 1);
  };
  return (
      <>
        <div className="contaninerModal">
          <div className="bodyModal">
            <div className="containerImagenModal">
              <div className="img">
                <img
                    src={image ? result.pic1 : changeImage}
                    alt="foto"
                    className="imagenData"
                />
              </div>

              <div className="carrosusel">
                <img
                    src={result.pic1}
                    alt="pic"
                    onClick={() => addImage(result.pic1)}
                />
                <img
                    src={result.pic2}
                    alt="pic"
                    onClick={() => addImage(result.pic2)}
                />
                <img
                    src={result.pic3}
                    alt="pic"
                    onClick={() => addImage(result.pic3)}
                />
                <img
                    src={result.pic4}
                    alt="pic"
                    onClick={() => addImage(result.pic4)}
                />
              </div>
            </div>

            <div className="containerInfor">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Info
              </p>
              <p>Nombre: {result.name} </p>
              <p>Descripcion: {result.description} </p>
              <p>Marca: HP {result.marc} </p>
              <p>Stars {result.star} </p>
            </div>

            <div className="containerPrices">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Price{" "}
              </p>
              <p>Price: {parseFloat(result.price).toFixed(2)} </p>
              <p>Desc: {result.desc} </p>
              <p>PriceDesc: {parseFloat(result.priceDesc).toFixed(2)} </p>
              <p>Quantity</p>

              <input
                  ref={inputRef}
                  type="number"
                  placeholder={input}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              />

              <button onClick={() => res()}>-</button>
              <button onClick={() => sum()}>+</button>

              <div className="contenedorBoton">
                <button onClick={() => AddCart(oneLaptop)}>Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};


export const DataModalMonitors = () => {
  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const { oneMonitor } = useSelector((state) => state.monitors);
  const { counter } = useSelector((state) => state.cart);
  const inputRef = useRef(1);


  const result = {
    name: oneMonitor.name,
    description: oneMonitor.description,
    marc: oneMonitor.marc,
    price: parseFloat(Number(oneMonitor.price).toFixed(2)),
    priceDesc: parseFloat(Number(oneMonitor.priceDesc).toFixed(2)),
    desc: oneMonitor.desc + "%",
    star: oneMonitor.star,
    pic1: oneMonitor.pic1,
    pic2: oneMonitor.pic2,
    pic3: oneMonitor.pic3,
    pic4: oneMonitor.pic4,
  };

  const addImage = (image) => {
    let newImgen = image;
    setImage(false);
    setChangeImage(newImgen);
  };

  const AddCart = (monitors) => {
    const value = Number(inputRef.current.value);
    dispatch(addCart(monitors));
    dispatch(getCounter(value));
  };

  const sum = () => {
    setInput(input + 1);
  };

  const res = () => {
    setInput(input - 1);
  };
  return (
      <>
        <div className="contaninerModal">
          <div className="bodyModal">
            <div className="containerImagenModal">
              <div className="img">
                <img
                    src={image ? result.pic1 : changeImage}
                    alt="foto"
                    className="imagenData"
                />
              </div>

              <div className="carrosusel">
                <img
                    src={result.pic1}
                    alt="pic"
                    onClick={() => addImage(result.pic1)}
                />
                <img
                    src={result.pic2}
                    alt="pic"
                    onClick={() => addImage(result.pic2)}
                />
                <img
                    src={result.pic3}
                    alt="pic"
                    onClick={() => addImage(result.pic3)}
                />
                <img
                    src={result.pic4}
                    alt="pic"
                    onClick={() => addImage(result.pic4)}
                />
              </div>
            </div>

            <div className="containerInfor">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Info
              </p>
              <p>Nombre: {result.name} </p>
              <p>Descripcion: {result.description} </p>
              <p>Marca: HP {result.marc} </p>
              <p>Stars {result.star} </p>
            </div>

            <div className="containerPrices">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Price{" "}
              </p>
              <p>Price: {parseFloat(result.price).toFixed(2)} </p>
              <p>Desc: {result.desc} </p>
              <p>PriceDesc: {parseFloat(result.priceDesc).toFixed(2)} </p>
              <p>Quantity</p>

              <input
                  ref={inputRef}
                  type="number"
                  placeholder={input}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              />

              <button onClick={() => res()}>-</button>
              <button onClick={() => sum()}>+</button>

              <div className="contenedorBoton">
                <button onClick={() => AddCart(oneMonitor)}>Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};


export const DataModalKeyboards = () => {
  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const { oneKeyboard } = useSelector((state) => state.keyboards);
  const { counter } = useSelector((state) => state.cart);
  const inputRef = useRef(1);


  const result = {
    name: oneKeyboard.name,
    description: oneKeyboard.description,
    marc: oneKeyboard.marc,
    price: parseFloat(Number(oneKeyboard.price).toFixed(2)),
    priceDesc: parseFloat(Number(oneKeyboard.priceDesc).toFixed(2)),
    desc: oneKeyboard.desc + "%",
    star: oneKeyboard.star,
    pic1: oneKeyboard.pic1,
    pic2: oneKeyboard.pic2,
    pic3: oneKeyboard.pic3,
    pic4: oneKeyboard.pic4,
  };

  const addImage = (image) => {
    let newImgen = image;
    setImage(false);
    setChangeImage(newImgen);
  };

  const AddCart = (oneKeyboard) => {
    const value = Number(inputRef.current.value);
    dispatch(addCart(oneKeyboard));
    dispatch(getCounter(value));
  };

  const sum = () => {
    setInput(input + 1);
  };

  const res = () => {
    setInput(input - 1);
  };
  return (
      <>
        <div className="contaninerModal">
          <div className="bodyModal">
            <div className="containerImagenModal">
              <div className="img">
                <img
                    src={image ? result.pic1 : changeImage}
                    alt="foto"
                    className="imagenData"
                />
              </div>

              <div className="carrosusel">
                <img
                    src={result.pic1}
                    alt="pic"
                    onClick={() => addImage(result.pic1)}
                />
                <img
                    src={result.pic2}
                    alt="pic"
                    onClick={() => addImage(result.pic2)}
                />
                <img
                    src={result.pic3}
                    alt="pic"
                    onClick={() => addImage(result.pic3)}
                />
                <img
                    src={result.pic4}
                    alt="pic"
                    onClick={() => addImage(result.pic4)}
                />
              </div>
            </div>

            <div className="containerInfor">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Info
              </p>
              <p>Name: {result.name} </p>
              <p>Description: {result.description} </p>
              <p>Marc: HP {result.marc} </p>
              <p>Stars {result.star} </p>
            </div>

            <div className="containerPrices">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Price{" "}
              </p>
              <p>Price: {parseFloat(result.price).toFixed(2)} </p>
              <p>Desc: {result.desc} </p>
              <p>PriceDesc: {parseFloat(result.priceDesc).toFixed(2)} </p>
              <p>Quantity</p>

              <input
                  ref={inputRef}
                  type="number"
                  placeholder={input}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              />

              <button onClick={() => res()}>-</button>
              <button onClick={() => sum()}>+</button>

              <div className="contenedorBoton">
                <button onClick={() => AddCart(oneKeyboard)}>Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};



export const DataModalAccessories = () => {
  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const { oneAccessory } = useSelector((state) => state.accessories);
  const { counter } = useSelector((state) => state.cart);
  const inputRef = useRef(1);


  const result = {
    name: oneAccessory.name,
    description: oneAccessory.description,
    marc: oneAccessory.marc,
    price: parseFloat(Number(oneAccessory.price).toFixed(2)),
    priceDesc: parseFloat(Number(oneAccessory.priceDesc).toFixed(2)),
    desc: oneAccessory.desc + "%",
    star: oneAccessory.star,
    pic1: oneAccessory.pic1,
    pic2: oneAccessory.pic2,
    pic3: oneAccessory.pic3,
    pic4: oneAccessory.pic4,
  };

  const addImage = (image) => {
    let newImgen = image;
    setImage(false);
    setChangeImage(newImgen);
  };

  const AddCart = (oneAccessorie) => {
    const value = Number(inputRef.current.value);
    dispatch(addCart(oneAccessorie));
    dispatch(getCounter(value));
  };

  const sum = () => {
    setInput(input + 1);
  };

  const res = () => {
    setInput(input - 1);
  };
  return (
      <>
        <div className="contaninerModal">
          <div className="bodyModal">
            <div className="containerImagenModal">
              <div className="img">
                <img
                    src={image ? result.pic1 : changeImage}
                    alt="foto"
                    className="imagenData"
                />
              </div>

              <div className="carrosusel">
                <img
                    src={result.pic1}
                    alt="pic"
                    onClick={() => addImage(result.pic1)}
                />
                <img
                    src={result.pic2}
                    alt="pic"
                    onClick={() => addImage(result.pic2)}
                />
                <img
                    src={result.pic3}
                    alt="pic"
                    onClick={() => addImage(result.pic3)}
                />
                <img
                    src={result.pic4}
                    alt="pic"
                    onClick={() => addImage(result.pic4)}
                />
              </div>
            </div>

            <div className="containerInfor">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Info
              </p>
              <p>Nombre: {result.name} </p>
              <p>Descripcion: {result.description} </p>
              <p>Marca: HP {result.marc} </p>
              <p>Stars {result.star} </p>
            </div>

            <div className="containerPrices">
              <p style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                Price{" "}
              </p>
              <p>Price: {parseFloat(result.price).toFixed(2)} </p>
              <p>Desc: {result.desc} </p>
              <p>PriceDesc: {parseFloat(result.priceDesc).toFixed(2)} </p>
              <p>Quantity</p>

              <input
                  ref={inputRef}
                  type="number"
                  placeholder={input}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              />

              <button onClick={() => res()}>-</button>
              <button onClick={() => sum()}>+</button>

              <div className="contenedorBoton">
                <button onClick={() => AddCart(oneAccessory)}>Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};





