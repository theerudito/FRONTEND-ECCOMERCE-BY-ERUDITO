import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Carrousel2 = () => {
  return (
    <Carousel>
      <div>
        <img
          src="https://avatars.dicebear.com/api/micah/wteweds.svg"
          alt="pic"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img
          src="https://avatars.dicebear.com/api/micah/wetrtds.svg"
          alt="pic"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          src="https://avatars.dicebear.com/api/micah/wedffs.svg"
          alt="pic"
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
