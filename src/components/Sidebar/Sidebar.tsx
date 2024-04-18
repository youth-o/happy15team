import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import DashboardList from "./DashboardList/DashboardList";
import CreateModal from "@/components/Modals/CreateDashboardModal/CreateModal";

// 아래는 테스트를 위한 items 생성, API 연결 후 지울 예정
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
  key: index + 1,
}));

const Sidebar: React.FC = () => {
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  const itemsPerPage: number = 12;

  const startIndex: number = currentPage * itemsPerPage
  const endIndex: number = startIndex + itemsPerPage;
  const displayItems = items.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleModal = () => {
    setShowModal(true);
  };

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  return (
    <>
      <div className={styles.sidebar}>
        <Link href="/mydashboard">
          <Image
            src="/images/sidebarLogo.svg"
            alt="Taskify Logo"
            width={109}
            height={33}
          />
        </Link>
        <div className={styles.title}>
          Dash Boards
          <Image
            src="/images/plusIcon.svg"
            alt="Plus Icon"
            width={20}
            height={20}
            onClick={handleModal}
            className={styles.cursorPointer}
          />
        </div>
        <div className={styles.hover}>
          {displayItems.map((item, index) => (
            <DashboardList
              key={item.key}
              item={item}
              index={index}
              clickedIndex={clickedIndex}
              handleClick={handleClick}
            />
          ))}
        </div>
        <div className={styles.pageBtn}>
        <button
          onClick={currentPage !== 0 ? handlePrevPage : undefined}
          className={currentPage !== 0 ? styles.open : styles.close}
        >
          {"<"}
        </button>
        <button
          onClick={
            currentPage + 1 < (items.length) / 12
              ? handleNextPage
              : undefined
          }
          className={
            currentPage + 1 < (items.length) / 12
              ? styles.open
              : styles.close
          }
        >
          {">"}
        </button>
      </div>
      </div>
      {showModal && <CreateModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Sidebar;
