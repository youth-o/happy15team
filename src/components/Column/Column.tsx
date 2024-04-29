import setModals from "@/lib/zustand";
import AddCardButton from "./AddCardButton/AddCardButton";
import AddColumnButton from "./AddColumnButton/AddColumnButton";
import styles from "./Column.module.css";
import ColumnCard from "./ColumnCard/ColumnCard";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import { getColumnData, putEditCard } from "@/api/DashboardData";
import { useEffect, useState } from "react";

const Column = () => {
  const {
    dashboardData,
    draggingCard,
    setIsFetching,
    isFetching,
    onDragging,
    setOnDragging,
    rerender,
  } = setModals();
  const [columnData, setColumnData] = useState<any>([]);
  const [draggingColumnId, setDraggingColumnId] = useState();
  const [dragEnter, setDragEnter] = useState(false);

  const dragEnd = async () => {
    const cardData = {
      assigneeUserId: draggingCard.assignee.userId,

      columnId: Number(draggingColumnId),
      title: draggingCard.title,
      description: draggingCard.description,
      dueDate: draggingCard.dueDate,
      tags: draggingCard.tags ? draggingCard.tags : "",
      imageUrl: draggingCard.cardImageUrl,
    };

    const noImgCardData = {
      assigneeUserId: draggingCard.assignee.userId,

      columnId: Number(draggingColumnId),
      title: draggingCard.title,
      description: draggingCard.description,
      dueDate: draggingCard.dueDate,
      tags: draggingCard.tags ? draggingCard.tags : "",
    };

    const cardId = draggingCard.id;
    const token = localStorage.getItem("accessToken");

    if (token) {
      await putEditCard(
        token,
        draggingCard.cardImageUrl ? cardData : noImgCardData,
        cardId
      );
      setIsFetching(!isFetching);
      setOnDragging(false);
    }
  };

  const handleDragEnter = (id) => {
    setDraggingColumnId(id);
    setDragEnter(true);
  };

  const fetchColumnData = async () => {
    if (!dashboardData.id) return null;
    const token = localStorage.getItem("accessToken");
    if (token) {
      const columnData = await getColumnData(token, dashboardData.id);
      setColumnData(columnData);
    }
  };

  useEffect(() => {
    fetchColumnData();
  }, [dashboardData.id, rerender]);

  if (!columnData) return null;

  return (
    <>
      <div className={styles.columnWrapper}>
        {columnData.map((data, index) => (
          <div
            key={index}
            className={styles.columnTemplate}
            onDragEnter={() => handleDragEnter(data.id)}
            onDragEnd={() => dragEnd()}
            onDragExit={() => setDragEnter(false)}
          >
            <ColumnHeader columnData={data} titles={[data.title]} />
            <AddCardButton columnId={data.id} />
            <div
              className={`${styles.cardSection} ${
                onDragging ? styles.droppable : ""
              }`}
            >
              <ColumnCard key={index} modalData={data} />
            </div>
          </div>
        ))}
        <AddColumnButton />
      </div>
    </>
  );
};

export default Column;
