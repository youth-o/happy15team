import styles from "./ChangeProfileModal.module.css";
import modalState from "@/lib/modalState";

function ChangeProfileModal() {
  const { setOpenModal } = modalState();

  const handleCloseModal = () => {
    setOpenModal("");
  };

  return (
    <>
      <div className={styles.modalText}>프로필이 저장되었습니다.</div>
      <button className={styles.modalBtn} onClick={handleCloseModal}>
        확인
      </button>
    </>
  );
}

export default ChangeProfileModal;
