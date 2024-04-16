import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import DashboardList from "./DashboardList/DashboardList";

  // 아래는 테스트를 위한 items 생성, API 연결 후 지울 예정
  const colors = ["var(--Green)", "var(--Violet20)", "var(--Orange)", "var(--Blue)", "var(--Pink)"];

  const items = Array.from({ length: 20 }, (_, index) => ({
    text: `코드잇${index + 1}`,
    color: colors[index % colors.length], // 순환하여 색상 선택
    crown: true,
    key: index + 1,
  }));

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
  
  const handleModal = () => {
    setShowModal(true);
  };

  //아래 3개의 함수는 클릭된 div, 호버된 div를 위한 함수
  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

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
      <div className={styles.hover}>
      {items.map((item, index) => (
        <DashboardList
          key={item.key}
          item={item}
          index={index}
          clickedIndex={clickedIndex}
          handleClick={handleClick}
        />
      ))}
      </div>
    </div>
  );
};

export default Sidebar;
