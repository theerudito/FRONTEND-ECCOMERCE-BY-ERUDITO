import React from "react";
import {useSelector} from "react-redux";

export const DataImage = () => {
    const { imageModal } = useSelector((state) => state.products);

    return (
        <>
            <div className="containerModalPrincipal">
            <div className="containerImgPrev">
                <img src={imageModal.pic1} alt="pic1" className="profile" />
            </div>
            <div className="containerPics">
                <img src={imageModal.pic2} alt="pic1" />
                <img src={imageModal.pic3} alt="pic1" />
                <img src={imageModal.pic4} alt="pic1" />
            </div>
            </div>
        </>
    );
};
