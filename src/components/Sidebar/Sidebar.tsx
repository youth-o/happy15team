import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import DashboardList from "./DashboardList/DashboardList";
import CreateModal from "@/components/Modals/CreateDashboardModal/CreateModal";

// 아래는 테스트를 위한 items 생성, API 연결 후 지울 예정
const colors = [
  "var(--Green)",
  "var(--Violet20)",
  "var(--Orange)",
  "var(--Blue)",
  "var(--Pink)",
];

const items = Array.from({ length: 20 }, (_, index) => ({
  text: `코드잇${index + 1}`,
  color: colors[index % colors.length],
  crown: true,
  key: index + 1,
}));

const Sidebar: React.FC = () => {
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

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
      {showModal && <CreateModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Sidebar;
