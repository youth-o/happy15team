import React, { useState } from "react";
import styles from "./GridDashboardList.module.css";
import DashboardList from "../Sidebar/DashboardList/DashboardList";

const colors = [
  "var(--Green)",
  "var(--Violet20)",
  "var(--Orange)",
  "var(--Blue)",
  "var(--Pink)",
];

const items = Array.from({ length: 18 }, (_, index) => ({
  text: `코드잇${index + 1}`,
  color: colors[index % colors.length], // 순환하여 색상 선택
  crown: true,
  key: index + 1,
}));

const GridDashboardList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

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
          <div className={styles.addDashboard}>새로운 대시보드</div>
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
