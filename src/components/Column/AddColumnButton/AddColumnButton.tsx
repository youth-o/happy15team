import styles from "./AddColumnButton.module.css";

const AddColumnButton = () => {
  return (
    <button className={styles.addColumnButton}>
      <div className={styles.plusButton}>+</div>
    </button>
  );
};

export default AddColumnButton;
