import React from "react";
import Image from "next/image";
import styles from "./DashboardList.module.css";

interface Item {
  text: string;
  color: string;
  crown: boolean;
}

interface DashboardListProps {
  item: Item;
  index: number;
  clickedIndex: number | null;
  handleClick: (index: number) => void;
}

const DashboardList: React.FC<DashboardListProps> = ({
  item,
  index,
  clickedIndex,
  handleClick,
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
