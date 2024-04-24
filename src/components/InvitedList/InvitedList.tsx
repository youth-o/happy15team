import React, { useEffect, useState } from "react";
import styles from "./InvitedList.module.css";
import EmptyInvitations from "./EmptyInvitations/EmptyInvitations";
import ExistInvitations from "./ExistInvitations/ExistInvitations";
import { InvitedData } from "@/api/InvitedData";
import useStore from "@/lib/zustand2";

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


const InvitedList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { dataChange, setDataChange } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const invitedData = await InvitedData(token, 30);
        setItems([...invitedData.invitations]);
        setDataChange(false);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dataChange]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>초대받은 대시보드</div>
      {items.length ? <ExistInvitations items={items} /> : <EmptyInvitations />}
    </div>
  );
};

export default InvitedList;