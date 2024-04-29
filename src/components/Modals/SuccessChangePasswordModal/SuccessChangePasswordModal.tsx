import styles from "./SuccessChangePasswordModal.module.css";
import modalState from "@/lib/modalState";

function SuccessChangePasswordModal() {
  const { setOpenModal } = modalState();
  const handleCloseModal = () => {
    setOpenModal("");
  };
  return (
    <>
      <div className={styles.modalText}>비밀번호가 변경되었습니다.</div>
      <button className={styles.modalBtn} onClick={handleCloseModal}>
        확인
      </button>
    </>
  );
}

export default SuccessChangePasswordModal;
