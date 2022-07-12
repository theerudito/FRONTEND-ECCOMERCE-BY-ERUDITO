import React from "react";

export const ModalImage = ({ children, isOpen, closeModal }) => {

    const handleModalClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <>
            <div className={`image ${isOpen && "is-open"}`} onClick={closeModal}>
                <div className="modal-image-container" onClick={handleModalClick}>
                    {children}
                </div>

            </div>
        </>
    );
};
