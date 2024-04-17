import React from "react";
import Image from "next/image";
import styles from "./DashboardList.module.css";

//인터페이스 나중에 한번에 인터페이스 모아놓는 곳으로 뺄 예정입니다
interface Item {
  text: string;
  color: string;
  crown: boolean;
}

//현재 DashboardList는 Sidebar 와 GridDashboardList 두 곳에서 쓰여서 clickedIndex와 handleClick은 선택적으로 받게 해놨습니다.
interface DashboardListProps {
  item: Item;
  index: number;
  clickedIndex?: number | null;
  handleClick?: (index: number) => void;
}

const DashboardList: React.FC<DashboardListProps> = ({
  item,
  index,
  clickedIndex = null,
  handleClick = () => {},
}) => {
  return (
    <div
      key={index}
      className={`${styles.dashboardContainer} ${
        clickedIndex === index ? styles.clicked : ""
      }`}
      onClick={() => handleClick(index)}
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
  );
};

export default DashboardList;
