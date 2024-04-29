import setModals from "@/lib/zustand";
import styles from "./AddCardButton.module.css";
import { useState } from "react";
import modalState from "@/lib/modalState";

const AddCardButton = ({ columnId }: any) => {
  const { setOpenedModalId }: any = setModals();
  const { setOpenModal } = modalState();

  const handleClick = () => {
    setOpenModal("openCreateCardModal");
    setOpenedModalId(columnId);
  };

  return (
    <>
      <button className={styles.addCardButton} onClick={handleClick}>
        <div className={styles.plusButton}>+</div>
      </button>
    </>
  );
};

export default AddCardButton;
