import React, { useState } from "react";
import styles from "./GridDashboardList.module.css";
import DashboardList from "../Sidebar/DashboardList/DashboardList";

interface GridDashboardListProps {
  text: string;
  color: string;
  crown: boolean;
}

const colors = [
  "var(--Green)",
  "var(--Violet20)",
  "var(--Orange)",
  "var(--Blue)",
  "var(--Pink)",
];

const items = Array.from({ length: 24 }, (_, index) => ({
  text: `코드잇${index + 1}`,
  color: colors[index % colors.length], // 순환하여 색상 선택
  crown: true,
  key: index + 1,
}));

const GridDashboardList: React.FC<GridDashboardListProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const itemsPerPage: number = currentPage === 0 ? 5 : 6;

  const startIndex: number =
    currentPage !== 0
      ? currentPage * itemsPerPage - 1
      : currentPage * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const displayItems = items.slice(startIndex, endIndex);

  //current 0     1      2
  //start 0       6      12
  //end   6       12     18
  //finally 0~5  6~11    12~17
  //0~4  5~10    11~16

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className={styles.gridContainer}>
        {currentPage === 0 && <div>새로운 대시보드</div>}
        {displayItems.map((item, index) => (
          <DashboardList key={item.key} item={item} index={index} />
        ))}
      </div>
      <div className="page">
        <button
          onClick={handlePrevPage}
          style={{ display: currentPage === 0 ? "none" : "block" }}
        >
          이전
        </button>
        <button
          onClick={handleNextPage}
          style={{
            display: currentPage + 1 > items.length / 6 ? "none" : "block",
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default GridDashboardList;
