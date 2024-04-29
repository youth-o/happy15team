import React, { useState, useEffect } from "react";
import styles from "./ExistInvitations.module.css";
import { PostInviteData } from "@/api/PostInviteData";
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

interface Props {
  items: Item[];
}

const ExistInvitations = ({ items }: Props) => {
  const { dataChange, setDataChange } = useStore();
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchedItems, setSearchedItems] = useState<Item[]>(items);
  const [invitedData, setInvitedData] = useState<{
    inviterId: number;
    inviteAccepted: boolean;
  }>({ inviterId: 0, inviteAccepted: false });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearchTitle(searchText);
    const results = searchInArrayOfObjects(items, searchText);
    setSearchedItems(results);
  };

  const searchInArrayOfObjects = (arr: Item[], searchText: string): Item[] => {
    const foundItems: Item[] = [];
    for (const obj of arr) {
      if (obj.dashboard.title.includes(searchText)) {
        foundItems.push(obj);
      }
    }
    return foundItems;
  };

  const handleInviteAccepted = (id: number) => {
    const newInvitedData = {
      inviterId: id,
      inviteAccepted: true,
    };

    setInvitedData(newInvitedData);
  };

  const handleInviteRejected = (id: number) => {
    const newInvitedData = {
      inviterId: id,
      inviteAccepted: false,
    };

    setInvitedData(newInvitedData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        if (invitedData.inviterId) {
          try {
            const data = await PostInviteData(token, invitedData);
            setDataChange((data as any).data.id);
          } catch (error) {
            console.error(error);
          }
        }
      } else {
        console.error("토큰 없음");
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invitedData]);

  useEffect(() => {
    setSearchedItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <input
          placeholder="검색"
          value={searchTitle}
          onChange={handleTextChange}
        />
        <div className={styles.searchIcon}>🔍</div>
      </div>
      <div className={`${styles.tableHeader} ${styles.tableItems}`}>
        <div>대시보드 이름</div>
        <div>초대자</div>
        <div>수락여부</div>
      </div>
      {searchedItems.map((item) => (
        <div key={item.id}>
          <div className={styles.tableItems}>
            <div>{item.dashboard.title}</div>
            <div>{item.inviter.nickname}</div>
            <div className={styles.btnContainer}>
              <button onClick={() => handleInviteAccepted(item.id)}>
                수락
              </button>
              <button onClick={() => handleInviteRejected(item.id)}>
                거절
              </button>
            </div>
          </div>
          <div className={styles.line} />
        </div>
      ))}
    </div>
  );
};

export default ExistInvitations;
