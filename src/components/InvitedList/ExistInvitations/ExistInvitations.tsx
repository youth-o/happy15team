import React from "react";
import styles from "./ExistInvitations.module.css";

interface Item {
  dashboard: {
    title: string;
    id: number;
  };
  inviter: {
    nickname: string;
    id: number;
  };
  id: number;
}

interface Props {
  items: Item[];
}

const ExistInvitations = ({ items }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <input placeholder="검색" />
        <div className={styles.searchIcon}>🔍</div>
      </div>
      <div className={`${styles.tableHeader} ${styles.tableItems}`}>
        <div>대시보드 이름</div>
        <div>초대자</div>
        <div>수락여부</div>
      </div>
      {items.map((item) => (
        <div key={item.id}>
          <div className={styles.tableItems}>
            <div>{item.dashboard.title}</div>
            <div>{item.inviter.nickname}</div>
            <div className={styles.btnContainer}>
              <button>수락</button>
              <button>거절</button>
            </div>
          </div>
          <div className={styles.line} />
        </div>
      ))}
    </div>
  );
};

export default ExistInvitations;
