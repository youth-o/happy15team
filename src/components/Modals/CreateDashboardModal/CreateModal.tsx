import setModals from "@/lib/zustand";
import React from "react";
import styles from "./CreateModal.module.css";

// 아래는 테스트를 위한 color 배열 생성, API 연결 후 지울 예정
const items = [
  "var(--Green)",
  "var(--Violet-20)",
  "var(--Orange)",
  "var(--Blue)",
  "var(--Pink)",
];

const CreateModal: React.FC = () => {
  const { closeCreateModal }: any = setModals();

  //아래는 오버레이의 버블링으로 모달 내부를 클릭했을때 꺼지는 것을 방지하기 위한 코드입니다.
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClickModalOutside = () => {
    closeCreateModal();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClickModalOutside}>
      <div className={styles.modal} onClick={handleModalClick}>
        <form>
          <h1>새로운 대시보드</h1>
          <h2>대시보드 이름</h2>
          <input placeholder="뉴프로젝트"></input>
          <div className={styles.circleContainer}>
            {items.map((color, index) => (
              <div
                key={index}
                className={styles.circle}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleClickModalOutside}>취소</button>
            <button>생성</button>
          </div>
          {/* 생성버튼에는 onClick 이 아닌 onSubmit 속성 넣을 예정 */}
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
