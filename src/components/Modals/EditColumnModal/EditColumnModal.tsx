import { MouseEvent, useRef } from "react";
import styles from "./EditColumnModal.module.css";
import setModals from "@/lib/zustand";
import Image from "next/image";

const EditColumnModal = () => {
  const { closeEditColumnModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeEditColumnModal(); //모달 바깥쪽 클릭했을 때 닫히는 로직 (후에 inputValue값 같이 초기화 시키기)
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalHeader}>
          <h1 className={styles.modalTitle}>컬럼관리</h1>

          <Image
            src="/images/trash.svg"
            width={35}
            height={35}
            alt="삭제버튼"
            className={styles.deleteModal}
          />
        </div>
        <form>
          <label htmlFor="inviteInput">이름</label>
          <input className={styles.inviteInput} />
        </form>
        <div className={styles.modalButtons}>
          <button onClick={closeEditColumnModal}>취소</button>
          <button className={styles.inviteButton}>변경</button>
        </div>
      </div>
    </div>
  );
};
export default EditColumnModal;
