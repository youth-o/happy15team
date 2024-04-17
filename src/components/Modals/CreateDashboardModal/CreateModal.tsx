import React from "react";
import styles from "./CreateModal.module.css";

interface CreateModalProps {
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ onClose }) => {
  //아래는 오버레이의 버블링으로 모달 내부를 클릭했을때 꺼지는 것을 방지하기 위한 코드입니다.
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // 아래는 테스트를 위한 color 배열 생성, API 연결 후 지울 예정
  const items = [
    "var(--Green)",
    "var(--Violet20)",
    "var(--Orange)",
    "var(--Blue)",
    "var(--Pink)",
  ];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
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
            <button onClick={onClose}>취소</button>
            <button>생성</button>
          </div>
          {/* 생성버튼에는 onClick 이 아닌 onSubmit 속성 넣을 예정 */}
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
