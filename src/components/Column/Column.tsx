import AddCardButton from "./AddCardButton/AddCardButton";
import AddColumnButton from "./AddColumnButton/AddColumnButton";
import styles from "./Column.module.css";
import ColumnCard from "./ColumnCard/ColumnCard";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import { putEditCard } from "@/api/DashboardData";
import { useState } from "react";

const Column = ({ columnData }) => {
  const { draggingCard, setIsFetching, isFetching, onDragging, setOnDragging } =
    setModals();
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
              <ColumnCard key={index} modalData={data} dragEnter={dragEnter} />
            </div>
          </div>
        ))}
        <AddColumnButton />
      </div>
    </>
  );
};

export default Column;
