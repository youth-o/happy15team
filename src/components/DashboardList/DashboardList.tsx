import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./DashboardList.module.css";
import { getMyDashboardData } from "@/api/MyDashboard";

interface DashboardItem {
  id: string;
  title: string;
  color: string;
  createdAt: string;
}

interface DashboardListProps {
  itemCount: number;
  myDashboardPage?: boolean;
}

const DashboardList = ({
  itemCount,
  myDashboardPage = false,
}: DashboardListProps) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [items, setItems] = useState<DashboardItem[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const dashboardData = await getMyDashboardData(token, page, itemCount);
        setItems(dashboardData.dashboards);
        setTotalCount(dashboardData.totalCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const page = currentPage;

  const totalPage = Math.ceil(totalCount / itemCount);

  return (
    <>
      <div
        className={
          myDashboardPage ? styles.myDashboardStyle : styles.sidebarSyle
        }
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.dashboardItems} ${
              clickedIndex === index ? styles.clicked : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <div
              className={styles.circle}
              style={{ backgroundColor: item.color }}
            ></div>
            <span className={styles.title}>{item.title}</span>
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
      </div>
      <div className={styles.pageContainer}>
        {myDashboardPage && (
          <div className={styles.pageDisplay}>
            {currentPage} 페이지 중 {totalPage}
          </div>
        )}
        <button
          onClick={currentPage === 1 ? undefined : handlePrevPage}
          className={currentPage === 1 ? styles.close : styles.open}
        >
          {"<"}
        </button>
        <button
          onClick={currentPage < totalPage ? handleNextPage : undefined}
          className={currentPage < totalPage ? styles.open : styles.close}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default DashboardList;
