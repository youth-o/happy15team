import { MouseEvent, useRef, useState } from "react";
import styles from "./EditColumnModal.module.css";
import setModals from "@/lib/zustand";
import Image from "next/image";
import { deleteColumn, reNameColumn } from "@/api/DashboardData";

const EditColumnModal = () => {
  const {
    closeEditColumnModal,
    openedModalId,
    setIsFetched,
    setIsFetching,
    rerender,
    setRerender,
    setRerenderDone,
  }: any = setModals();
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeEditColumnModal(); //모달 바깥쪽 클릭했을 때 닫히는 로직 (후에 inputValue값 같이 초기화 시키기)
    }
  };

  const handleClickDelete = async () => {
    const result = confirm("컬럼을 삭제하시겠습니까?");
    if (result) {
      const token = localStorage.getItem("accessToken");
      if (token) {
        await deleteColumn(token, openedModalId.id);
        closeEditColumnModal();
        setRerender(!rerender);
      }
      return;
    }
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
      closeEditColumnModal();
    }
  };

  return (
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
    >
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
        <form>
          <label htmlFor="inviteInput">이름</label>
          <input
            placeholder={openedModalId.title}
            className={styles.inviteInput}
            maxLength={10}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
        </form>
        <div className={styles.modalButtons}>
          <button onClick={closeEditColumnModal}>취소</button>
          <button onClick={handleClickRename} className={styles.inviteButton}>
            변경
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditColumnModal;
