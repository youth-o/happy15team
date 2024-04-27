import styles from "./NicknameErrorModal.module.css";
import modalState from "@/lib/modalState";

function NicknameErrorModal() {
  const { setOpenModal } = modalState();

  const handleCloseModal = () => {
    setOpenModal("");
  };
  return (
    <>
      <div className={styles.modalText}>닉네임은 10자 이하로 작성해주세요.</div>
      <button className={styles.modalBtn} onClick={handleCloseModal}>
        확인
      </button>
    </>
  );
}

export default NicknameErrorModal;
