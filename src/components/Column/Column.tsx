import AddCardButton from "./AddCardButton/AddCardButton";
import AddColumnButton from "./AddColumnButton/AddColumnButton";
import styles from "./Column.module.css";
import ColumnCard from "./ColumnCard/ColumnCard";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import { useState } from "react";

const Column = ({ columnData }) => {
  const [render, setRender] = useState(false);
  if (!columnData) return null;
  return (
    <>
      <div className={styles.columnWrapper}>
        {columnData.map((data) => (
          <div key={data.id} className={styles.columnTemplate}>
            <ColumnHeader titles={[data.title]} />
            <AddCardButton columnId={data.id} />
            <ColumnCard id={data.id} />
          </div>
        ))}
        <AddColumnButton />
      </div>
    </>
  );
};

export default Column;
