import React, { useEffect, useState } from "react";
import styles from "./InvitedList.module.css";
import EmptyInvitations from "./EmptyInvitations/EmptyInvitations";
import ExistInvitations from "./ExistInvitations/ExistInvitations";
import { InvitedData } from "@/api/InvitedData";

const InvitedList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const invitedData = await InvitedData(token, 15);
        setItems(invitedData.invitations);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>초대받은 대시보드</div>
      {items.length ? <ExistInvitations items={items} /> : <EmptyInvitations />}
    </div>
  );
};

export default InvitedList;