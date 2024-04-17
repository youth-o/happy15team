import useModalStore from "@/lib/zustand";
import { useRef, MouseEvent } from "react";
import styles from "./PasswordMismatch.module.css";

function PasswordMismatch() {
  const { closePasswordMismatch }: any = useModalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closePasswordMismatch();
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>비밀번호가 틀립니다!</div>
        <button className={styles.modalBtn} onClick={closePasswordMismatch}>
          확인
        </button>
      </div>
    </div>
  );
}

export default PasswordMismatch;
