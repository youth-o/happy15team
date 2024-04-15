import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";

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
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
      alert(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  //아래는 테스트를 위한 items 생성 , API 연결후 지울 예정
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
        <div
          key={index}
          className={`${styles.dashboardContainer} ${
            clickedIndex === index && styles.clicked
          } ${hoveredIndex === index && styles.hovered}`}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={styles.circle}
            style={{ backgroundColor: item.color }}
          ></div>
          <span>{item.text}</span>
          {item.crown && (
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
  );
};

export default Sidebar;
