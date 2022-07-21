import { useSelector } from "react-redux";
import fondo from "../../Imagens/fondo3.png";

import { Login } from "./Login";
import { Register } from "./Register";

export const IndexPage = () => {
  const { register } = useSelector((state) => state.account);

  return (
    <div className="containerBackground">
      <div className="containerLogoIndex">
        <img src={fondo} alt="da" />
      </div>

      <div className="containerDataUser">
        <article>{register ? <Register /> : <Login />}</article>
      </div>
    </div>
  );
};
