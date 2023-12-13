import { useState } from "react";
import style from "../modal/modal.module.scss"
import { IoMdClose } from "react-icons/io";

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
      <button className={style.toggle} onClick={openModal}>
        Læs mere
      </button>
    );
  }

  return (
    <div>
      <p>Description</p>
      <div className="content">{children}</div>
      <div className="actions">
        <button className={style.toggle} onClick={closeModal}>
        <IoMdClose />

        </button>
      </div>
    </div>
  );
};
