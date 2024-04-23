import setModals from "@/lib/zustand";
import { useRef, MouseEvent } from "react";
import styles from "./SamePasswordErrorModal.module.css";

function SamePasswordError() {
  const { closeSamePasswordErrorModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeSamePasswordErrorModal();
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>현재 비밀번호가 틀렸습니다.</div>
        <button
          className={styles.modalBtn}
          onClick={closeSamePasswordErrorModal}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default SamePasswordError;
