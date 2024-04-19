import setModals from "@/lib/zustand";
import { useRef, MouseEvent } from "react";
import styles from "./NicknameErrorModal.module.css";

function NicknameErrorModal() {
  const { closeNicknameErrorModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeNicknameErrorModal();
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>
          닉네임은 10자 이하로 작성해주세요.
        </div>
        <button className={styles.modalBtn} onClick={closeNicknameErrorModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default NicknameErrorModal;
