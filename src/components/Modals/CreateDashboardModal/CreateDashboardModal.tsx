import setModals from "@/lib/zustand";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./CreateDashboardModal.module.css";

// 아래는 테스트를 위한 color 배열 생성, API 연결 후 지울 예정
const items = [
  "var(--Green)",
  "var(--Violet-20)",
  "var(--Orange)",
  "var(--Blue)",
  "var(--Pink)",
];

const CreateDashboardModal = () => {
  const { closeCreateDashboardModal }: any = setModals();
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  //아래는 오버레이의 버블링으로 모달 내부를 클릭했을때 꺼지는 것을 방지하기 위한 코드입니다.
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  const handleClickModalOutside = () => {
    closeCreateDashboardModal();
  };
  const handleCreateDashboard = () => {
    //대시보드 생성 api 보내고 거기로 이동
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClickModalOutside}>
      <div className={styles.modal} onClick={handleModalClick}>
        <form>
          <div className={styles.title}>새로운 대시보드</div>
          <div className={styles.naming}>대시보드 이름</div>
          <input placeholder="뉴프로젝트"></input>
          <div className={styles.circleContainer}>
            {items.map((color, index) => (
              <div
                key={index}
                className={styles.circle}
                style={{ backgroundColor: color }}
                onClick={() => handleClick(index)}
              >
                {clickedIndex === index ? (
                  <Image
                    src="/images/checkIcon.svg"
                    alt="Check Icon"
                    width={24}
                    height={24}
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleClickModalOutside}>취소</button>
            <button onClick={handleCreateDashboard} type="submit">
              생성
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDashboardModal;
