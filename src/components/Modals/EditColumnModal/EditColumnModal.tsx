import { MouseEvent, useRef, useState } from "react";
import styles from "./EditColumnModal.module.css";
import setModals from "@/lib/zustand";
import Image from "next/image";
import { deleteColumn, reNameColumn } from "@/api/DashboardData";
import modalState from "@/lib/modalState";

const EditColumnModal = () => {
  const { openedModalId, rerender, setRerender }: any = setModals();
  const { setOpenModal } = modalState();
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleClickDelete = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      await deleteColumn(token, openedModalId.id);
      setOpenModal("");
      setRerender(!rerender);
    }
    return;
  };

  const handleClickRename = async () => {
    if (inputRef.current.value.length < 1) {
      alert("변경하실 컬럼명을 입력해주세요");
      return;
    }
    const token = localStorage.getItem("accessToken");
    if (token) {
      await reNameColumn(token, openedModalId.id, inputValue);
      setRerender(!rerender);
      setOpenModal("");
    }
  };

  return (
    <>
      <div className={styles.modalWrapper}>
        <div className={styles.modalHeader}>
          <h1 className={styles.modalTitle}>컬럼관리</h1>
          <Image
            src="/images/trash.svg"
            width={35}
            height={35}
            alt="삭제버튼"
            className={styles.deleteModal}
            onClick={handleClickDelete}
          />
        </div>
        <div>
          <label htmlFor="inviteInput">이름</label>
          <input
            placeholder={openedModalId.title}
            className={styles.inviteInput}
            maxLength={10}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
        </div>
      </div>
      <div className={styles.modalButtons}>
        <button onClick={() => setOpenModal("")}>취소</button>
        <button onClick={handleClickRename} className={styles.inviteButton}>
          변경
        </button>
      </div>
    </>
  );
};

export default EditColumnModal;
