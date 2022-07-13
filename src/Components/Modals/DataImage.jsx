import React, { useState } from "react";
import { useSelector } from "react-redux";

export const DataImage = () => {
  const [image, setImage] = useState(true);
  const [changeImage, setChangeImage] = useState("");
  const { imageModal } = useSelector((state) => state.products);

  const addImage = (image) => {
    let newImage = image;
    setImage(false);
    setChangeImage(newImage);
  };

  return (
    <>
      <div className="containerModalPrincipal">
        <div className="containerImgPrev">
          <img
            src={image ? imageModal.pic1 : changeImage}
            alt="pic1"
            className="profile"
          />
        </div>
        <div className="containerPics">
          <img
            src={imageModal.pic2}
            alt="pic1"
            onClick={() => addImage(imageModal.pic1)}
          />
          <img
            src={imageModal.pic3}
            alt="pic1"
            onClick={() => addImage(imageModal.pic2)}
          />
          <img
            src={imageModal.pic4}
            alt="pic1"
            onClick={() => addImage(imageModal.pic3)}
          />
        </div>
      </div>
    </>
  );
};
