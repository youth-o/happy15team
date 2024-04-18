import React from "react";
import styles from "./ExistInvitations.module.css";

interface Item {
  dashboardName: string;
  inviter: string;
  key: number;
}

interface Props {
  items: Item[];
}

const ExistInvitations: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.container}>
      <input placeholder="🔍 검색" />
      <div className={`${styles.tableHeader} ${styles.tableDatas}`}>
        <div>대시보드 이름</div>
        <div>초대자</div>
        <div>수락여부</div>
      </div>
      {items.map((item) => (
        <div key={item.key}>
          <div className={styles.tableDatas}>
            <div>{item.dashboardName}</div>
            <div>{item.inviter}</div>
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
