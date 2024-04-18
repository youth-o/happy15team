import React from "react";
import styles from "./InvitedList.module.css";
import EmptyInvitations from "./EmptyInvitations/EmptyInvitations";
import ExistInvitations from "./ExistInvitations/ExistInvitations";

const items = Array.from({ length: 20 }, (_, index) => ({
  dashboardName: `${index + 2024}년 할 일`,
  inviter: `코드잇${index + 1}`,
  key: index + 1,
}));

const InvitedList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>초대받은 대시보드</h1>
      {items.length ? <ExistInvitations items={items}/> : <EmptyInvitations />}
    </div>
  );
};

export default InvitedList;
