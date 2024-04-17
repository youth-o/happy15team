import setModals from "@/lib/zustand";
import styles from "./InviteModal.module.css";
import { MouseEvent, useRef } from "react";
import { IsetModals } from "@/lib/zustand";

const InviteModal = () => {
  // todo
  // 초대 버튼 클릭시 초대 이메일 및 에러처리 & 소셜 초대기능 구현

  const { closeModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeModal(); //모달 바깥쪽 클릭했을 때 닫히는 로직 (후에 inputValue값 같이 초기화 시키기)
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <h1 className={styles.modalTitle}>초대하기</h1>
        <form>
          <label htmlFor="inviteInput">이메일</label>
          <input className={styles.inviteInput} />
        </form>
        <div className={styles.modalButtons}>
          <button onClick={closeModal}>취소</button>
          <button className={styles.inviteButton}>초대</button>
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
