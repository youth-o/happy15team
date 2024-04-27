import setModals from "@/lib/zustand";
import styles from "./ColumnCard.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getCardData, getConfirmCardData } from "@/api/DashboardData";
import Participants from "@/components/Nav/Participants/Participants";
import modalState from "@/lib/modalState";

const ColumnCard = ({ id }) => {
  const [cardData, setCardData] = useState<any>([]);
  const { setConfirmCardData }: any = setModals();
  const keyRef = useRef<any>(null);
  const { setOpenModal } = modalState();

  const fetchCardData = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const cardData = await getCardData(token, id);
      setCardData(cardData);
    }
  };

  const handleClickCard = (e: React.MouseEvent) => {
    const cardId = keyRef.current.id;
    console.log(cardId);
    setConfirmCardData(cardId);
    setOpenModal("openCheckCardModal");
  };

  console.log(keyRef);

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <>
      {cardData.map((data) => (
        <div
          key={data.id}
          className={styles.cardWrapper}
          onClick={handleClickCard}
          ref={keyRef}
          id={data.id}
        >
          {cardData?.imageUrl && (
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
            <div className={styles.createdAt}>{data.createdAt}</div>
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
