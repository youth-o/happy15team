import setModals from "@/lib/zustand";
import { useRef, MouseEvent } from "react";
import styles from "./EmailExistedModal.module.css";

function EmailExistedModal() {
  const { closeEmailExistedModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeEmailExistedModal();
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>이미 사용 중인 이메일입니다.</div>
        <button className={styles.modalBtn} onClick={closeEmailExistedModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default EmailExistedModal;
