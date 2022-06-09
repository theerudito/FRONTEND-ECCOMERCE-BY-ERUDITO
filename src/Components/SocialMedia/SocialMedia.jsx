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
        <p className="titleDescription">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        </p>
        <ul className="listOfferts">
          <li>
            <i className="fa-solid fa-angle-right"></i>Nam elit magna hendrerit
          </li>

          <li>
            <i className="fa-solid fa-angle-right"></i>Nam elit magna hendrerit
          </li>

          <li>
            <i className="fa-solid fa-angle-right"></i>Nam elit magna hendrerit
          </li>

          <li>
            <i className="fa-solid fa-angle-right"></i>Nam elit magna hendrerit
          </li>

          <li>
            <i className="fa-solid fa-angle-right"></i>Nam elit magna hendrerit
          </li>
        </ul>
      </div>

      <div className="store">
        <h1 className="titlestore">STORE INFORMATION</h1>
        <ul className="listStore">
          <li>
            <i className="fa-solid fa-location-dot"></i>
            Direction: Quito - Ecuador
          </li>

          <li>
            <i className="fa-solid fa-mobile"></i>
            Phone: 88544545464
          </li>

          <li>
            <i className="fa-solid fa-envelope-circle-check"></i>
            Email: erudito.tv@gmail.com
          </li>

          <li>
            <i className="fa-solid fa-circle-info"></i>
            Suport: suport@helpme.com
          </li>
        </ul>
      </div>
    </div>
  );
};
