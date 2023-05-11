import React from "react";
import { createPortal } from "react-dom";
import "../style/modal.css";

const Modal = ({ children, isOpened, onClose }) => {
  console.log(isOpened);
  if (!isOpened) {
    return null;
  }
  return createPortal(
    <div className="overlay">
      <div className="modal">{children}</div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
