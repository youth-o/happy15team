import React from "react";
import styles from "./CreateDashboardModal.module.css";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  //아래는 오버레이 클릭했을때 모달에 버블링 전파되는걸 막기위해서 넣은 코드입니다
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // 아래는 테스트를 위한 color 생성, API 연결 후 지울 예정
  const items = ["var(--Green)", "var(--Violet20)", "var(--Orange)", "var(--Blue)", "var(--Pink)"];

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

export default Modal;
