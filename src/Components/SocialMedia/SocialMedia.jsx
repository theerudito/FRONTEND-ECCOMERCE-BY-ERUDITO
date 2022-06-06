import React from "react";

export const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <div className="facebook">
        <h1 className="titlefb">FOLLOW US ON FACEBOOK</h1>
        <p className="user">@theerudito</p>
      </div>

      <div className="offers">
        <h1 className="titleOffers">HOT OFFERS</h1>
        <p className="titleDescription">Loren ddfsdsadasdasdasdasdasdasdasdasd</p>
        <ul className="listOfferts">
          <li> -- Nam elit magna hendrerit </li>
          <li> -- Nam elit magna hendrerit </li>
          <li> -- Nam elit magna hendrerit </li>
        </ul>
      </div>

      <div className="store">
        <h1 className="titlestore">STORE INFORMATION</h1>
        <ul className="listStore">
          <li>Direction: Quito Ecuador</li>
          <li>Phone: 88544545464</li>
          <li>Email: email@buy.com</li>
          <li>Suport: suport@helpme.com</li>
        </ul>
      </div>
    </div>
  );
};
