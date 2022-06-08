import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Carrousel = () => {
  return (
    <div className="divCarrousel">
      <Carousel autoPlay className="carrousel" dynamicHeight={true}>
        <img
          alt=""
          className="imgcarrousel"
          src="https://avatars.dicebear.com/api/micah/weds.svg"
        />

        <img
          alt=""
          className="imgcarrousel"
          src="https://avatars.dicebear.com/api/micah/dwes.svg"
        />

        <img
          alt=""
          className="imgcarrousel"
          src="https://avatars.dicebear.com/api/micah/dsee.svg"
        />

        <img
          alt=""
          className="imgcarrousel"
          src="https://avatars.dicebear.com/api/micah/dds.svg"
        />

        <img
          alt=""
          className="imgcarrousel"
          src="https://avatars.dicebear.com/api/micah/dsf.svg"
        />
      </Carousel>
    </div>
  );
};
