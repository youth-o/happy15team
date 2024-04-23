import setModals from "@/lib/zustand";
import { useRef, MouseEvent } from "react";
import styles from "./ChangeProfileModal.module.css";

function ChangeProfileModal() {
  const { closeChangeProfileModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeChangeProfileModal();
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>프로필이 저장되었습니다.</div>
        <button className={styles.modalBtn} onClick={closeChangeProfileModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default ChangeProfileModal;
