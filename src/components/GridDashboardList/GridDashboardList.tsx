import React, { useState } from "react";
import styles from "./GridDashboardList.module.css";
import DashboardList from "../Sidebar/DashboardList/DashboardList";

interface GridDashboardListProps {
  text: string;
  color: string;
  crown: boolean;
}

const items = [
  { text: "박우혁", color: "var(--Green)", crown: true },
  { text: "백승아", color: "var(--Violet20)", crown: false },
  { text: "유승재", color: "var(--Orange)", crown: false },
  { text: "이유승", color: "var(--Blue)", crown: false },
  { text: "코드잇", color: "var(--Pink)", crown: true },
];

const GridDashboardList: React.FC<GridDashboardListProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const itemsPerPage: number = 6;

  const startIndex: number = currentPage * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  // const displayItems: DashboardListProps[] = data.slice(startIndex, endIndex);

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // const handlePrevPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };

  return (
    <div>
      <div className={styles.gridContainer}>
        <div>새로운 대시보드</div>
        {items.map((item, index) => (
        <DashboardList
          key={index}
          item={item}
          index={index}
        />
      ))}
      </div>
      <div className="page">
        <button>이전</button>
        <button>다음</button>
      </div>
    </div>
  );
};

export default GridDashboardList;
