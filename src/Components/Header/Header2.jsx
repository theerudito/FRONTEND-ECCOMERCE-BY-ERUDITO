import React from "react";



export const Header2 = () => {
  return (
    <div className="header2">

      <div className="contenedorLogo1">
        <img className='logo1' src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf" alt="logo1" />
      </div>

      <div className="containerSeach">
        <input type="text" placeholder="Search"  className="seach"/>
        <button className="lupa">O</button>
      </div>

      <div className="containerCart">
      
        <button className="buttonCart"><i class="fa-solid fa-cart-shopping"></i></button>
        <p className="add">1</p>
      </div>

    </div>
  );
};
