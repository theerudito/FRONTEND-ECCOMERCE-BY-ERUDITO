import { useState } from "react";
import fondo from "../../Imagens/fondo3.png";

import { Login } from "./Login";
import { Register } from "./Register";

export const IndexPage = () => {
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  const cambio = (login) => {
    return <Login />;
  };

  return (
    <div className="containerBackground">
      <div className="containerLogoIndex">
        <img src={fondo} alt="da" />
      </div>

      <div className="containerDataUser">
        <article>{login ? <Index Login={handleLogin} /> : cambio()}</article>
      </div>
    </div>
  );
};

const Index = ({ Login, Register }) => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
        alt="logo"
        className="logoIndex"
      />

      <button onClick={Login}>Login</button>
      <p>OR</p>
      <button onClick={Login}>Register</button>
    </>
  );
};
