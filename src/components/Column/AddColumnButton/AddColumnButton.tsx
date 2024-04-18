import styles from "./AddColumnButton.module.css";

const AddColumnButton = () => {
  return (
    <button className={styles.addColumnButton}>
      새로운 칼럼 추가<div className={styles.plusButton}>+</div>
    </button>
  );
};

export default AddColumnButton;
