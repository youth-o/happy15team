import setModals from "@/lib/zustand";
import styles from "./AddCardButton.module.css";

const AddCardButton = () => {
  const { openCreateCardModal }: any = setModals();
  return (
    <button className={styles.addCardButton} onClick={openCreateCardModal}>
      <div className={styles.plusButton}>+</div>
    </button>
  );
};

export default AddCardButton;
