import modalState from "@/lib/modalState";
import styles from "./AddColumnButton.module.css";

const AddColumnButton = () => {
  const { setOpenModal } = modalState();

  const handleOpenModal = () => {
    setOpenModal("openAddColumnModal");
  };
  
  return (
    <button
      onClick={handleOpenModal}
      className={styles.addColumnButton}
    >
      새로운 칼럼 추가<div className={styles.plusButton}>+</div>
    </button>
  );
};

export default AddColumnButton;
