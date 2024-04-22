import setModals from "@/lib/zustand";
import { useRef, MouseEvent } from "react";
import styles from "./SuccessChangePasswordModal.module.css";

function SuccessChangePassword() {
  const { closeSuccessChangePasswordModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeSuccessChangePasswordModal();
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>비밀번호가 변경되었습니다.</div>
        <button
          className={styles.modalBtn}
          onClick={closeSuccessChangePasswordModal}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default SuccessChangePassword;
