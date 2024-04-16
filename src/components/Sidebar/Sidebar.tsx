import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import DashboardList from "./DashboardList/DashboardList";


//사이드바
// export interface SidebarData {
//   title: string;
//   color: string;
//   createdByMe: boolean;
// }

// interface SidebarProps {
//   items: Item[];
// }

// const Sidebar: React.FC<SidebarProps> = ({ items }) => {
// 위의 주석처리된 부분은 API 연결 후 다시 살릴 코드

interface SidebarProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setShowModal }) => {
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  
  const handleModal = () => {
    setShowModal(true);
  };

  //아래 3개의 함수는 클릭된 div, 호버된 div를 위한 함수
  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // 아래는 테스트를 위한 items 생성, API 연결 후 지울 예정
  const items = [
    { text: "박우혁", color: "var(--Green)", crown: true },
    { text: "백승아", color: "var(--Violet20)", crown: false },
    { text: "유승재", color: "var(--Orange)", crown: false },
    { text: "이유승", color: "var(--Blue)", crown: false },
    { text: "코드잇", color: "var(--Pink)", crown: true },
  ];

  return (
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
      {items.map((item, index) => (
        <DashboardList
          key={index}
          item={item}
          index={index}
          clickedIndex={clickedIndex}
          hoveredIndex={hoveredIndex}
          handleClick={handleClick}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default Sidebar;
