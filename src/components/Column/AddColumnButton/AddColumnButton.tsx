import setModals from "@/lib/zustand";
import styles from "./AddColumnButton.module.css";

const AddColumnButton = () => {
  const { openAddColumnModal }: any = setModals();
  return (
    <button onClick={openAddColumnModal} className={styles.addColumnButton}>
      새로운 칼럼 추가<div className={styles.plusButton}>+</div>
    </button>
  );
};

export default AddColumnButton;
