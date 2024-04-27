import styles from "./AddColumnModal.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";
import { addColumns } from "@/api/DashboardData";
import modalState from "@/lib/modalState";
import setModals from "@/lib/zustand";

const AddColumnModal = () => {
  const { rerender, setRerender }: any = setModals();
  const inputRef = useRef(null);
  const { setOpenModal } = modalState();

  const router = useRouter();
  const { id } = router.query;

  const handleCloseModal = () => {
    setOpenModal("");
  };

  const handleClickAdd = async () => {
    if (inputRef.current.value.length < 1) {
      alert("컬럼명은 1글자 이상 입력해주세요");
      return;
    }
    const token = localStorage.getItem("accessToken");
    if (token) {
      await addColumns(token, inputRef.current.value, id);
      setOpenModal("");
      setRerender(!rerender);
    }
  };

  return (
    <>
      <h1 className={styles.modalTitle}>새 컬럼 생성</h1>
      <form>
        <label htmlFor="inviteInput">이름</label>
        <input
          maxLength={10}
          placeholder="새로운 프로젝트"
          className={styles.inviteInput}
          ref={inputRef}
        />
      </form>
      <div className={styles.modalButtons}>
        <button onClick={handleCloseModal}>취소</button>
        <button onClick={handleClickAdd} className={styles.inviteButton}>
          생성
        </button>
      </div>
    </>
  );
};

export default AddColumnModal;
