import { useEffect, useState } from "react";
import styles from "./ColumnHeader.module.css";
import Image from "next/image";
import modalState from "@/lib/modalState";

const ColumnHeader = ({ titles }: { titles: string[] }) => {
  const { setOpenModal } = modalState();

  const handleOpenModal = () => {
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
          <div className={styles.cardCounts}>
            {/* cards.length */}
            {1}
          </div>
        </div>
        <button onClick={handleOpenModal} className={styles.columnSetting}>
          <Image
            src="/images/setting.svg"
            width={20}
            height={20}
            alt="컬럼설정버튼이미지"
          />
        </button>
      </div>
    </div>
  );
};

export default ColumnHeader;
