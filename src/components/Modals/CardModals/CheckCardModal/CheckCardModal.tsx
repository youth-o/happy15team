import Image from "next/image";
import AddComment from "./AddComment/AddComment";
import styles from "./CheckCardModal.module.css";
import ViewComment from "./ViewComment/ViewComment";
import { MouseEvent, useRef, useState } from "react";
import setModals from "@/lib/zustand";

const CheckCardModal = () => {
  const { openEditCardModal, closeCheckCardModal }: any = setModals();
  const [kebab, setKebab] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleKebabClick = () => {
    if (kebab) {
      setKebab(false);
      return;
    }
    setKebab(true);
  };

  const handleModalClose = (e: MouseEvent) => {
    if (kebab && (e.target as HTMLDivElement).id !== "kebab") {
      setKebab(false);
    }
    if (modalRef.current === e.target) {
      closeCheckCardModal(); //모달 바깥쪽 클릭했을 때 닫히는 로직 (후에 inputValue값 같이 초기화 시키기)
    }
  };

  const openEditModal = () => {
    closeCheckCardModal();
    openEditCardModal();
  };
  return (
    <div
      className={styles.modalOverlay}
      ref={modalRef}
      onClick={handleModalClose}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.colSection1}>
          <h1 className={styles.cardTitle}>cardTitle</h1>
          <div className={styles.cardTags}>
            <span className={styles.columnTitle}>columnTitle</span>
            <div className={styles.vr} />
            <span className={styles.tags}>프로젝트</span>
          </div>
          <p className={styles.cardDescription}>왤케 할게 많아;;</p>
          <div className={styles.cardImage}>
            <Image
              src="/images/cardImageTest.svg"
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
                  <li>삭제하기</li>
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
            <button className={styles.closeBtn} onClick={closeCheckCardModal}>
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
                <Image
                  src="images/profileImageTest.svg"
                  width={30}
                  height={30}
                  alt="유저프로필"
                />
                <span>박우혁</span>
              </div>
            </div>
            <div className={styles.deadLine}>
              <p>마감일</p>
              <span>2024.04.22 14:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckCardModal;
