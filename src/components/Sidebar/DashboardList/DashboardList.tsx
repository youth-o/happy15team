import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./DashboardList.module.css";
import { getMyDashboardData } from "@/api/MyDashboard";

//현재 DashboardList는 Sidebar 와 GridDashboardList 두 곳에서 쓰여서 clickedIndex와 handleClick은 선택적으로 받게 해놨습니다.

interface DashboardItem {
  id: string;
  title: string;
  color: string;
  createdAt?: string; // createdAt이 선택적인 속성이라면 추가합니다.
}

const DashboardList = () => {
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<DashboardItem[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      const page = currentPage;
      try {
        const dashboardData = await getMyDashboardData(token, page);
        setItems(dashboardData.dashboards);
        setTotalCount(dashboardData.totalCount);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log(items);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.dashboardContainer} ${
            clickedIndex === index ? styles.clicked : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <div
            className={styles.circle}
            style={{ backgroundColor: item.color }}
          ></div>
          <span>{item.title}</span>
          {item.createdAt && (
            <Image
              src="/images/crown.svg"
              alt="Crown Icon"
              width={17.5}
              height={14}
            />
          )}
        </div>
      ))}
      <button
        onClick={currentPage === 1 ? undefined : handlePrevPage}
        className={currentPage === 1 ? styles.close : styles.open}
      >
        {"<"}
      </button>
      <button
        onClick={currentPage < totalCount / 12 ? handleNextPage : undefined}
        className={currentPage < totalCount / 12 ? styles.open : styles.close}
      >
        {">"}
      </button>
    </>
  );
};

export default DashboardList;
