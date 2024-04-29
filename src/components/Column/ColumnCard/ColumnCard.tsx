import setModals from "@/lib/zustand";
import styles from "./ColumnCard.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  getCardData,
  getComment,
  getConfirmCardData,
} from "@/api/DashboardData";
import Participants from "@/components/Nav/Participants/Participants";
import modalState from "@/lib/modalState";
import moment from "moment";
import { useRouter } from "next/router";

const ColumnCard = ({ modalData }) => {
  const [cardData, setCardData] = useState<any>([]);
  const { setOpenModal } = modalState();
  const {
    setConfirmCardData,
    isFetching,
    setOpenedModalId,
    setDraggingCard,
    setOnDragging,
    onDragging,
    setCardLength,
    cardLength,
  }: any = setModals();

  // 날짜 및 시간을 원하는 형식으로 포맷합니다.
  const formattedDate = (createdAt) => {
    const date = new Date(createdAt);
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getUTCDate()).padStart(2, "0")} ${String(
      date.getUTCHours()
    ).padStart(2, "0")}:${String(date.getUTCMinutes()).padStart(2, "0")}`;
  };

  const fetchCardData = async () => {
    if (!modalData) return;
    const token = localStorage.getItem("accessToken");
    if (token) {
      const cardData = await getCardData(token, modalData.id);
      setCardData(cardData.cards);
    }
  };
  const handleClickCard = (data: any) => {
    setConfirmCardData(data.id);
    setOpenedModalId(modalData);
    setOpenModal("openCheckCardModal");
  };

  const cardDragging = (data) => {
    setDraggingCard(data);
    setOnDragging(true);
  };

  useEffect(() => {
    fetchCardData();
  }, [isFetching, modalData]);

  if (!cardData) return null;

  return (
    <>
      {cardData.map((data) => (
        <div
          key={data.id}
          className={`${styles.cardWrapper} ${
            onDragging ? styles.dragging : ""
          }`}
          onClick={() => handleClickCard(data)}
          id={data.id}
          draggable
          onDragStart={() => cardDragging(data)}
        >
          {data.imageUrl && (
            <div className={styles.cardrImage}>
              <Image
                src={data.imageUrl}
                width={300}
                height={100}
                alt="카드이미지"
              />
            </div>
          )}
          <div className={styles.cardTitle}>{data?.title}</div>
          <div className={styles.tagWrapper}>
            {data.tags.map((tag, index) => (
              <div
                key={index}
                className={`${styles.cardTag} ${
                  index % 4 === 0
                    ? styles.green
                    : index % 4 === 1
                    ? styles.purple
                    : index % 4 === 2
                    ? styles.orange
                    : index % 4 === 3
                    ? styles.blue
                    : ""
                }`}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.createdAt}>
              {formattedDate(data.createdAt)}
            </div>
            <div className={styles.manager}>
              <Participants user={data.assignee} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ColumnCard;
