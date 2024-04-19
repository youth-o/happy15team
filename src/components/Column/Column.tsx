import AddCardButton from "./AddCardButton/AddCardButton";
import AddColumnButton from "./AddColumnButton/AddColumnButton";
import styles from "./Column.module.css";
import ColumnHeader from "./ColumnHeader/ColumnHeader";

const Column = () => {
  const columnData = [
    {
      id: 0,
      title: "To Do",
      teamId: "string",
      createdAt: "2024-04-17T10:52:02.820Z",
      updatedAt: "2024-04-17T10:52:02.820Z",
    },
    {
      id: 1,
      title: "On Progress",
      teamId: "string",
      createdAt: "2024-04-17T10:52:02.820Z",
      updatedAt: "2024-04-17T10:52:02.820Z",
    },
    {
      id: 2,
      title: "칼럼3",
      teamId: "Done",
      createdAt: "2024-04-17T10:52:02.820Z",
      updatedAt: "2024-04-17T10:52:02.820Z",
    },
  ];

  //todo : title 길이 제한하기

  if (!columnData) return null;
  return (
    <div className={styles.columnWrapper}>
      {columnData.map((data) => (
        <>
          <div className={styles.columnTemplate}>
            <ColumnHeader titles={[data.title]} />
            <AddCardButton />
          </div>
        </>
      ))}
      <AddColumnButton />
    </div>
  );
};

export default Column;
