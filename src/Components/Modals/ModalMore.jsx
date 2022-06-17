import React from "react";

export const ModalMore = ({ children, isOpen, closeModal }) => {

  const handleModalClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <>
      <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalClick}>
          {children}
        </div>
        <button onClick={closeModal} className="modal-close">
          X
        </button>
      </div>
    </>
  );
};
