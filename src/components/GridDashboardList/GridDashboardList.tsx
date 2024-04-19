import React, { useState } from "react";
import styles from "./GridDashboardList.module.css";
import DashboardList from "../Sidebar/DashboardList/DashboardList";
import Image from "next/image";
import setModals from "@/lib/zustand";

// 아래 colors 와 items 배열은 api 연결 전 테스트를 위한 임시 데이터 값입니다.
const colors = [
  "var(--Green)",
  "var(--Violet-20)",
  "var(--Orange)",
  "var(--Blue)",
  "var(--Pink)",
];

const items = Array.from({ length: 25 }, (_, index) => ({
  text: `${index + 2024}년 계획`,
  color: colors[index % colors.length],
  crown: index % 2 === 0,
  click: true,
  key: index + 1,
}));

const GridDashboardList: React.FC = () => {
  //여기서부터 return 바로 위까지 page당 6개 보여주고, 페이지 넘길수 있는 로직인데 좀더 구독성 좋고 깔끔하게 짜고 싶습니다.
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { openCreateModal }: any = setModals();
  const itemsPerPage: number = currentPage === 0 ? 5 : 6;

  const startIndex: number =
    currentPage !== 0
      ? currentPage * itemsPerPage - 1
      : currentPage * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const displayItems = items.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className={styles.gridContainer}>
        {currentPage === 0 && (
          <div className={styles.addDashboard} onClick={openCreateModal}>
            새로운 대시보드
            <Image
              src="/images/plusIcon.svg"
              width={23}
              height={23}
              alt="초대버튼이미지"
            />
          </div>
        )}
        {displayItems.map((item, index) => (
          <DashboardList key={item.key} item={item} index={index} />
        ))}
      </div>
      <div className={styles.pageBtn}>
        <div className={styles.pageDisplay}>
          {currentPage + 1} 페이지 중 {Math.floor(items.length / 6 + 1)}
        </div>
        <button
          onClick={currentPage !== 0 ? handlePrevPage : undefined}
          className={currentPage !== 0 ? styles.open : styles.close}
        >
          {"<"}
        </button>
        <button
          onClick={
            currentPage + 1 < (items.length + 1) / 6
              ? handleNextPage
              : undefined
          }
          className={
            currentPage + 1 < (items.length + 1) / 6
              ? styles.open
              : styles.close
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default GridDashboardList;
