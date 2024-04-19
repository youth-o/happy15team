import styles from "./AddCardButton.module.css";

const AddCardButton = () => {
  return (
    <button className={styles.addCardButton}>
      <div className={styles.plusButton}>+</div>
    </button>
  );
};

export default AddCardButton;
