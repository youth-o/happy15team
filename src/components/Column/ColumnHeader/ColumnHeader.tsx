import styles from "./ColumnHeader.module.css";
import Image from "next/image";
import setModals from "@/lib/zustand";
import modalState from "@/lib/modalState";
import { getCardData } from "@/api/DashboardData";
import { useEffect, useState } from "react";

const ColumnHeader = ({ titles, columnData }) => {
  const { openModal, setOpenModal } = modalState();
  const [totalCount, setTotalCount] = useState(0);
  const { dashboardData, setOpenedModalId, isFetching, rerender }: any =
    setModals();

  const handleClickEdit = () => {
    setOpenedModalId(columnData);
    setOpenModal("openEditColumnModal");
  };

  const fetchCardData = async () => {
    const token = localStorage.getItem("accessToken");
    if (token && columnData.dashboardId === dashboardData.id) {
      const cardData = await getCardData(token, columnData.id);
      setTotalCount(cardData.cards.length);
    }
  };

  useEffect(() => {
    // totalCount 값을 가져오는 비동기 함수 실행
    fetchCardData();
  }, [isFetching, dashboardData.id]); // isFetching 및 dashboardData.id 변경 시 실행

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleTag}>
          <div className={styles.tagCircle}></div>
          {titles.map((title: any) => (
            <div className={styles.columnTitle}>{title}</div>
          ))}
          <div className={styles.cardCounts}>{totalCount}</div>
        </div>
        <button onClick={handleClickEdit} className={styles.columnSetting}>
          <Image
            src="/images/setting.svg"
            width={40}
            height={20}
            alt="컬럼설정버튼이미지"
          />
        </button>
      </div>
    </div>
  );
};

export default ColumnHeader;
