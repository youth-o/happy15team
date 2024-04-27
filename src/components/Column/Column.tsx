import AddCardButton from "./AddCardButton/AddCardButton";
import AddColumnButton from "./AddColumnButton/AddColumnButton";
import styles from "./Column.module.css";
import ColumnCard from "./ColumnCard/ColumnCard";
import ColumnHeader from "./ColumnHeader/ColumnHeader";

const Column = ({ columnData }) => {

  if (!columnData) return null;
  return (
    <>
      <div className={styles.columnWrapper}>
        {columnData.map((data, index) => (
          <div key={data.id} className={styles.columnTemplate}>
            <ColumnHeader columnData={data} titles={[data.title]} />
            <AddCardButton columnId={data.id} />
            <ColumnCard modalData={data} />
          </div>
        ))}
        <AddColumnButton />
      </div>
    </>
  );
};

export default Column;