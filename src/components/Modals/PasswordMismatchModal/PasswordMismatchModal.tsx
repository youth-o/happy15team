import styles from "./PasswordMisMatchModal.module.css";
import modalState from "@/lib/modalState";

function PasswordMismatchModal() {
  const { setOpenModal } = modalState();

  const handleCloseModal = () => {
    setOpenModal("");
  };

  return (
    <>
      <div className={styles.modalText}>비밀번호가 틀립니다!</div>
      <button className={styles.modalBtn} onClick={handleCloseModal}>
        확인
      </button>
    </>
  );
}

export default PasswordMismatchModal;
