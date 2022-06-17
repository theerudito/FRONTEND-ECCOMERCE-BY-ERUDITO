import { useState } from "react";

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const openModal = () => {
    setIsShowing(true);
  };

  const closeModal = () => {
    setIsShowing(false);
  };
  return [isShowing, openModal, closeModal];
};
