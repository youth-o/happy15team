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
import moment from "moment";

const ColumnCard = ({ modalData }) => {
  const [cardData, setCardData] = useState<any>([]);
  const {
    openCheckCardModal,
    setConfirmCardData,
    isFetching,
    setCardLength,
    setOpenedModalId,
  }: any = setModals();

  const formatDate = moment(cardData.createdAt).format("YYYY-MM-DD hh:mm");

  const handleClickCard = (data: any) => {
    setConfirmCardData(data.id);
    setOpenedModalId(modalData);
    openCheckCardModal();
  };

  const fetchCardData = async () => {
    if (!modalData) return;
    const token = localStorage.getItem("accessToken");
    if (token) {
      const cardData = await getCardData(token, modalData.id);
      setCardData(cardData.cards);
      setCardLength(cardData.totalCount);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, [isFetching]);

  console.log(cardData);

  if (!cardData) return null;

  return (
    <>
      {cardData.map((data) => (
        <div
          key={data.id}
          className={styles.cardWrapper}
          onClick={() => handleClickCard(data)}
          id={data.id}
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
            <div className={styles.createdAt}>{formatDate}</div>
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
