import setModals from "@/lib/zustand";
import styles from "./AddColumnModal.module.css";
import { MouseEvent, useRef } from "react";

const AddColumnModal = () => {
  // todo
  // 추가버튼 누를시 post보내기

  const { closeAddColumnModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeAddColumnModal(); //모달 바깥쪽 클릭했을 때 닫히는 로직 (후에 inputValue값 같이 초기화 시키기)
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <h1 className={styles.modalTitle}>새 컬럼 생성</h1>
        <form>
          <label htmlFor="inviteInput">이름</label>
          <input placeholder="새로운 프로젝트" className={styles.inviteInput} />
        </form>
        <div className={styles.modalButtons}>
          <button onClick={closeAddColumnModal}>취소</button>
          <button className={styles.inviteButton}>생성</button>
        </div>
      </div>
    </div>
  );
};

export default AddColumnModal;
