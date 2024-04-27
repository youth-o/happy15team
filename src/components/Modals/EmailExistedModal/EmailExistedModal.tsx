import styles from "./EmailExistedModal.module.css";
import modalState from "@/lib/modalState";

function EmailExistedModal() {
  const { setOpenModal } = modalState();

  const handleOpenModal = () => {
    setOpenModal("");
  };

  return (
    <>
      <div className={styles.modalText}>이미 사용 중인 이메일입니다.</div>
      <button className={styles.modalBtn} onClick={handleOpenModal}>
        확인
      </button>
    </>
  );
}

export default EmailExistedModal;
