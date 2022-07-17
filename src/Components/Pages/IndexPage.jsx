import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const IndexPage = () => {
  return (
    <>
      <Header />

      <article style={{ width: "500px", margin: "auto" }}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
          alt="logo"
        />
      </article>
      <Footer />
    </>
  );
};
