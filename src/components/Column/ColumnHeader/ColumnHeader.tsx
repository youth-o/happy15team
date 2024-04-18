import { useState } from "react";
import styles from "./ColumnHeader.module.css";
import Image from "next/image";

const data = [
  {
    id: 0,
    title: "칼럼1",
    teamId: "string",
    createdAt: "2024-04-17T10:52:02.820Z",
    updatedAt: "2024-04-17T10:52:02.820Z",
  },
  {
    id: 1,
    title: "칼럼2",
    teamId: "string",
    createdAt: "2024-04-17T10:52:02.820Z",
    updatedAt: "2024-04-17T10:52:02.820Z",
  },
  {
    id: 2,
    title: "칼럼3",
    teamId: "string",
    createdAt: "2024-04-17T10:52:02.820Z",
    updatedAt: "2024-04-17T10:52:02.820Z",
  },
];

const ColumnHeader = () => {
  const [columnTitle, setColumnTitle] = useState([
    { title: "To Do" },
    { title: "On Progress" },
    { title: "Done" },
  ]);
  return (
    <div className={styles.headerWrapper}>
      {columnTitle.map((titles) => (
        <div className={styles.titleWrapper}>
          <div className={styles.titleTag}>
            <div className={styles.tagCircle}></div>
            <div className={styles.columnTitle}>{titles.title}</div>
            <div className={styles.cardCounts}>
              {/* cards.length */}
              {1}
            </div>
          </div>
          <button className={styles.columnSetting}>
            <Image
              src="/images/setting.svg"
              width={20}
              height={20}
              alt="컬럼설정버튼이미지"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ColumnHeader;
