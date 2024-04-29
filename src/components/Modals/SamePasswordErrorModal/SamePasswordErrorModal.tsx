import modalState from "@/lib/modalState";
import styles from "./SamePasswordErrorModal.module.css";

function SamePasswordError() {
  const { setOpenModal } = modalState();

  const handleCloseModal = () => {
    setOpenModal("");
  };

  return (
    <>
      <div className={styles.modalText}>현재 비밀번호가 틀렸습니다.</div>
      <button className={styles.modalBtn} onClick={handleCloseModal}>
        확인
      </button>
    </>
  );
}

export default SamePasswordError;
