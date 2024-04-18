import styles from "./Column.module.css";
import ColumnHeader from "./ColumnHeader/ColumnHeader";

const Column = () => {
  return (
    <div className={styles.columnWrapper}>
      <ColumnHeader />
    </div>
  );
};

export default Column;
