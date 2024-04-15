import React from "react";
import Image from "next/image";
import styles from "./DashboardList.module.css";

interface List {
  text: string;
  color: string;
  crown: boolean;
}

interface DashboardListProps {
  item: List;
  index: number;
  clickedIndex: number | null;
  hoveredIndex: number | null;
  handleClick: (index: number) => void;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
}

const DashboardItem: React.FC<DashboardListProps> = ({
  item,
  index,
  clickedIndex,
  hoveredIndex,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      key={index}
      className={`${styles.dashboardContainer} ${
        clickedIndex === index ? styles.clicked : ""
      } ${hoveredIndex === index ? styles.hovered : ""}`}
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
  );
};

export default DashboardItem;