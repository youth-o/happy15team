import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import DashboardList from "./DashboardList/DashboardList";

// interface Item {
//   title: string;
//   color: string;
//   createdByMe: boolean;
// }

// interface SidebarProps {
//   items: Item[];
// }

// const Sidebar: React.FC<SidebarProps> = ({ items }) => {
// 위의 주석처리된 부분은 API 연결 후 다시 살릴 코드

const Sidebar: React.FC = () => {
  // 클릭 및 마우스 오버 상태를 관리할 상태 추가
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // 클릭 및 마우스 오버 이벤트 핸들러 함수
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
    { text: "박우혁", color: "blue", crown: true },
    { text: "백승아", color: "yellow", crown: false },
    { text: "유승재", color: "black", crown: false },
    { text: "이유승", color: "red", crown: true },
  ];

  return (
    <div className={styles.sidebar}>
      <Image
        src="/images/sidebarLogo.svg"
        alt="Taskify Logo"
        width={109}
        height={33}
      />
      <div className={styles.title}>
        Dash Boards
        <Image
          src="/images/plusIcon.svg"
          alt="Plus Icon"
          width={20}
          height={20}
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
