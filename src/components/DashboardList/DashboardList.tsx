import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./DashboardList.module.css";
import { getMyDashboardData } from "@/api/getMyDashboardData";
import useStore from "@/lib/zustand2";

interface DashboardItem {
  id: string;
  title: string;
  color: string;
  createdByMe: boolean;
}

interface DashboardListProps {
  size: number;
  myDashboardPage?: boolean;
  onEmpty?: (isEmpty: boolean) => void;
}

const DashboardList = ({
  size,
  myDashboardPage = false,
  onEmpty,
}: DashboardListProps) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [items, setItems] = useState<DashboardItem[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const { dataChange, setDataChange } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const dashboardData = await getMyDashboardData(token, page, size);
        setItems(dashboardData.dashboards);
        setTotalCount(dashboardData.totalCount);
        setDataChange(false);
        if (onEmpty) {
          onEmpty(dashboardData.totalCount === 0);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage, dataChange, setDataChange]);

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

  const totalPage = Math.ceil(totalCount / size);

  return (
    <>
      <div
        className={
          myDashboardPage ? styles.myDashboardStyle : styles.sidebarStyle
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
            {item.createdByMe && (
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
      {totalCount !== 0 ? (
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
      ) : null}
    </>
  );
};

export default DashboardList;
