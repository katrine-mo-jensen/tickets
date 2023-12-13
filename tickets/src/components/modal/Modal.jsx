import React, { useState } from "react";

export const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return (
      <button className="toggle-button" onClick={openModal}>
        Se mere
      </button>
    );
  }

  return (
    <div className="modal" id="modal">
      <p>Description</p>
      <div className="content">{children}</div>
      <div className="actions">
        <button className="toggle-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};
