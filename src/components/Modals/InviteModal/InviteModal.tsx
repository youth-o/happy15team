import styles from "./InviteModal.module.css";
import modalState from "@/lib/modalState";

const InviteModal = () => {
  const { setOpenModal } = modalState();

  const handleCloseModal = () => {
    setOpenModal("");
  };
  // todo
  // 초대 버튼 클릭시 초대 이메일 및 에러처리 & 소셜 초대기능 구현

  return (
    <>
      <h1 className={styles.modalTitle}>초대하기</h1>
      <form className={styles.form}>
        <label htmlFor="inviteInput">이메일</label>
        <input className={styles.inviteInput} />
      </form>
      <div className={styles.modalButtons}>
        <button onClick={handleCloseModal}>취소</button>
        <button className={styles.inviteButton}>초대</button>
      </div>
    </>
  );
};

export default InviteModal;
