import Image from "next/image";
import AddComment from "./AddComment/AddComment";
import styles from "./CheckCardModal.module.css";
import ViewComment from "./ViewComment/ViewComment";
import { useEffect, useRef, useState } from "react";
import setModals from "@/lib/zustand";
import { deleteCard, getConfirmCardData } from "@/api/DashboardData";
import Participants from "@/components/Nav/Participants/Participants";
import modalState from "@/lib/modalState";

const CheckCardModal = () => {
  const { setOpenModal } = modalState();
  const {
    confirmCardData,
    openedModalId,
    setOpenedCardData,
    rerender,
    setRerender,
    setIsFetching,
    isFetching,
  }: any = setModals();

  const [kebab, setKebab] = useState(false);
  const [cardData, setCardData] = useState<any>([]);

  const handleKebabClick = () => {
    if (kebab) {
      setKebab(false);
      return;
    }
    setKebab(true);
  };

  const openEditModal = () => {
    setOpenModal("openEditCardModal");
  };

  const handleDeleteCard = async () => {
    const result = confirm("카드를 삭제하시겠습니까?");
    if (!result) return;
    const token = localStorage.getItem("accessToken");
    const cardId = confirmCardData;
    if (token) {
      await deleteCard(token, cardId);
    }

    setIsFetching(!isFetching);
    setOpenModal("");
  };

  const handleCloseModal = () => {
    setOpenModal("");
    setIsFetching(!isFetching);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const cardId = confirmCardData;
    const fetchCardData = async () => {
      if (token) {
        const confirmCardData = await getConfirmCardData(token, cardId);
        setCardData(confirmCardData);
        setOpenedCardData(confirmCardData);
      }
    };
    fetchCardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmCardData]);

  if (!cardData) return null;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.colSection1}>
        <h1 className={styles.cardTitle}>{cardData.title}</h1>
        <div className={styles.cardTags}>
          <span className={styles.columnTitle}>{openedModalId.title}</span>
          <div className={styles.vr} />
          {cardData?.tags?.map((tag: any, index: any) => (
            <span key={index} className={styles.tags}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.cardDescription}>{cardData.description}</p>

        <div className={styles.cardImage}>
          <Image
            src={
              cardData.imageUrl
                ? cardData.imageUrl
                : "/images/defaultCardImage.svg"
            }
            alt="카드이미지"
            width={400}
            height={200}
          />
        </div>

        <AddComment />
        <ViewComment />
      </div>
      <div className={styles.colSection2}>
        <div className={styles.tools}>
          <div className={styles.kebab} onClick={handleKebabClick}>
            {kebab && (
              <ul id="kebab" className={styles.kebabMenu}>
                <li onClick={openEditModal}>수정하기</li>
                <li onClick={handleDeleteCard}>삭제하기</li>
              </ul>
            )}
            <button className={styles.kebabBtn}>
              <Image
                src="/images/kebabButton.svg"
                alt="케밥버튼"
                width={50}
                height={30}
              />
            </button>
          </div>
          <button className={styles.closeBtn} onClick={handleCloseModal}>
            <Image
              src="/images/closeButton.svg"
              alt="닫힘버튼"
              width={50}
              height={30}
            />
          </button>
        </div>
        <div className={styles.cardPreview}>
          <div className={styles.manager}>
            <p>담당자</p>
            <div className={styles.managerProfile}>
              <Participants user={cardData.assignee} />
              <span>{cardData.assignee?.nickname}</span>
            </div>
          </div>
          <div className={styles.deadLine}>
            <p>마감일</p>
            <span>{cardData.dueDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckCardModal;
