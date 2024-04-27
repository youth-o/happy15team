import setModals from "@/lib/zustand";
import { useRef, MouseEvent } from "react";
import styles from "./NonExistedUserModal.module.css";

function NonExistedUserModal() {
  const { closeNonExistedUserModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeNonExistedUserModal();
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>존재하지 않는 회원입니다.</div>
        <button className={styles.modalBtn} onClick={closeNonExistedUserModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default NonExistedUserModal;
