import setModals from "@/lib/zustand";
import styles from "./AddCardButton.module.css";
import { useState } from "react";

const AddCardButton = ({ columnId }) => {
  const { openCreateCardModal, setOpenedModalId }: any = setModals();

  const handleClick = () => {
    openCreateCardModal();
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
