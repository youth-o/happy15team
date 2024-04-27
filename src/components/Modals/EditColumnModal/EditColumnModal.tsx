import styles from "./EditColumnModal.module.css";
import Image from "next/image";
import modalState from "@/lib/modalState";

const EditColumnModal = () => {
  const { setOpenModal } = modalState();

  const handleCloseModal = () => {
    setOpenModal("");
  };
  return (
    <>
      <div className={styles.modalHeader}>
        <h1 className={styles.modalTitle}>컬럼관리</h1>

        <Image
          src="/images/trash.svg"
          width={35}
          height={35}
          alt="삭제버튼"
          className={styles.deleteModal}
        />
      </div>
      <form>
        <label htmlFor="inviteInput">이름</label>
        <input className={styles.inviteInput} />
      </form>
      <div className={styles.modalButtons}>
        <button onClick={handleCloseModal}>취소</button>
        <button className={styles.inviteButton}>변경</button>
      </div>
    </>
  );
};
export default EditColumnModal;
