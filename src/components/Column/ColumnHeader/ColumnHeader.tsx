import styles from "./ColumnHeader.module.css";
import Image from "next/image";
import setModals from "@/lib/zustand";
import modalState from "@/lib/modalState";
import { getCardData } from "@/api/DashboardData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ColumnHeader = ({ titles, columnData }) => {
  const { openModal, setOpenModal } = modalState();
  const [totalCount, setTotalCount] = useState(0);
  const { cardLength, openEditColumnModal, setOpenedModalId, isFetching }: any =
    setModals();

  const handleClickEdit = () => {
    setOpenedModalId(columnData);
    setOpenModal("openEditColumnModal");
  };

  const fetchCardData = async () => {
    if (!columnData) return;
    const token = localStorage.getItem("accessToken");
    if (token) {
      const cardData = await getCardData(token, columnData.id);

      setTotalCount(cardData.totalCount);
    }
  };

  const router = useRouter();
  const { id }: any = router.query;
  useEffect(() => {
    fetchCardData();
  }, [isFetching, id]);
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
