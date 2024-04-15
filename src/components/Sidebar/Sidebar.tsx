import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import DashboardList from "./DashboardList/DashboardList";
import Link from "next/link";

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
  const [showModal, setShowModal] = useState(false);
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  
  // 아래 2개의 함수는 모달창 껐다 켰다 하는 셋팅 (모달창 끄는 셋팅은 나중에 모달창 구현 후 설정)
  const handleModal = () => {
    setShowModal(true);
    alert("곧 모달이 구현될 예정");
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

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
    { text: "박우혁", color: "blue", crown: true },
    { text: "백승아", color: "yellow", crown: false },
    { text: "유승재", color: "black", crown: false },
    { text: "이유승", color: "red", crown: true },
  ];

  return (
    <div className={styles.sidebar}>
      <Link href="/">
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
