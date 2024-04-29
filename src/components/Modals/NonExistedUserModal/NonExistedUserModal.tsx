import modalState from "@/lib/modalState";
import styles from "./NonExistedUserModal.module.css";

function NonExistedUserModal() {
  const { setOpenModal } = modalState();
  const handleCloseModal = () => {
    setOpenModal("");
  }

  return (
    <>
      <div className={styles.modalText}>존재하지 않는 회원입니다.</div>
      <button className={styles.modalBtn} onClick={handleCloseModal}>
        확인
      </button>
    </>
  );
}

export default NonExistedUserModal;
