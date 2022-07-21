import { useSelector } from "react-redux";
import fondo from "../../Imagens/fondo3.png";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import { useEffect } from "react";

export const IndexPage = () => {
  const navigate = useNavigate();

  const { register } = useSelector((state) => state.account);
  const LocalStorage = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (LocalStorage) {
      navigate("/account");
    }

    console.log("LocalStorage");
  }, [LocalStorage, navigate]);

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
