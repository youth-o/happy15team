import setModals from "@/lib/zustand";
import { useRef, MouseEvent } from "react";
import styles from "./RegisterSuccessModal.module.css";
import { useRouter } from "next/router";

function RegisterSuccessModal() {
  const { closeRegisterSuccessModal }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeRegisterSuccessModal();
    }
  };

  const handleButtonClick = () => {
    closeRegisterSuccessModal();
    router.push("/signin");
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalText}>가입이 완료되었습니다!</div>
        <button className={styles.modalBtn} onClick={handleButtonClick}>
          확인
        </button>
      </div>
    </div>
  );
}

export default RegisterSuccessModal;
