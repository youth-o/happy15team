import styles from "./ColumnHeader.module.css";
import Image from "next/image";
import setModals from "@/lib/zustand";
import modalState from "@/lib/modalState";

const ColumnHeader = ({ titles, columnData }) => {
  const { openModal, setOpenModal } = modalState();
  const { cardLength, setOpenedModalId }: any =
    setModals();

  const handleClickEdit = () => {
    setOpenedModalId(columnData);
    setOpenModal("openEditColumnModal");
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleTag}>
          <div className={styles.tagCircle}></div>
          {titles.map((title: any) => (
            <div className={styles.columnTitle}>{title}</div>
          ))}
          <div className={styles.cardCounts}>{cardLength}</div>
        </div>
        <button onClick={handleClickEdit} className={styles.columnSetting}>
          <Image
            src="/images/setting.svg"
            width={40}
            height={20}
            alt="컬럼설정버튼이미지"
          />
        </button>
      </div>
    </div>
  );
};

export default ColumnHeader;