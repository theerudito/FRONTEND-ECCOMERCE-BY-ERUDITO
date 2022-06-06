import React from "react";

export const Header2 = () => {
  return (
    <div className="header2">

      <div className="contenedorLogo1">
        <img className='logo1' src="https://www.facebook.com/images/fb_icon_325x325.png" alt="facebook" />
      </div>

      <div className="containerSeach">
        <input type="text" placeholder="Search"  className="seach"/>
        <button className="lupa">O</button>
      </div>

      <div className="containerCart">
        <button className="buttonCart">Cart</button>
        <p className="add">1</p>
      </div>

    </div>
  );
};
