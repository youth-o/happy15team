import styles from "./AddColumnModal.module.css";
import modalState from "@/lib/modalState";

const AddColumnModal = () => {
  // todo
  // 추가버튼 누를시 post보내기
  const { setOpenModal } = modalState();

  const handleCloseModal = () => {
    setOpenModal("");
  };

  return (
    <>
      <h1 className={styles.modalTitle}>새 컬럼 생성</h1>
      <form className={styles.formContainer}>
        <label htmlFor="inviteInput">이름</label>
        <input placeholder="새로운 프로젝트" className={styles.inviteInput} />
      </form>
      <div className={styles.modalButtons}>
        <button onClick={handleCloseModal}>취소</button>
        <button className={styles.inviteButton}>생성</button>
      </div>
    </>
  );
};

export default AddColumnModal;
