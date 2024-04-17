import React from "react";
import styles from "./InvitedList.module.css";
import InvitedZero from "./InvitedZero/InvitedZero";

const items = [];

const InvitedList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>초대받은 대시보드</h1>
      {items.length ? <div>리스트</div> : <InvitedZero />}
    </div>
  );
};

export default InvitedList;
