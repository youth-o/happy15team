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
          <div className={styles.tableDatas} key={item.key}>
            <div>{item.dashboardName}</div>
            <div>{item.inviter}</div>
            <div>수락 거절</div>
          </div>
        ))}
    </div>
  );
};

export default ExistInvitations;
