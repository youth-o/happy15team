import React, { useState } from "react";
import styles from "./GridDashboardList.module.css";

interface DashboardListProps {
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

const DashboardList: React.FC<DashboardListProps> = ({ data }) => {
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
        <div className={styles.gridItem}>새로운 대시보드</div>
        {items.map((item, index) => (
          <div key={index} className={styles.gridItem}>
            {item.text}
          </div>
        ))}
      </div>
      <div className="page">
        <button>이전</button>
        <button>다음</button>
      </div>
    </div>
  );
};

export default DashboardList;
