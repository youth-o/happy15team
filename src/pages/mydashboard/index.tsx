import Sidebar from "@/components/Sidebar/Sidebar";
import Nav from "@/components/Nav/Nav";
import DashboardList from "@/components/DashboardList/DashboardList";
import styles from "./Mydashboard.module.css";
import InvitedList from "@/components/InvitedList/InvitedList";
import React, { useState } from "react";
import Image from "next/image";
import modalState from "@/lib/modalState";

const MyDashboard = () => {
  const [dashboardListEmpty, setDashboardListEmpty] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { setOpenModal } = modalState();

  const handleOpenModal = () => {
    setOpenModal("openCreateDashboardModal");
  };

  const handleMouseIn = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Nav />
      <Sidebar />
      <div className={styles.wrapper}>
        <div className={dashboardListEmpty ? styles.emptyWrapper : ""}>
          <div
            className={`${styles.addDashboard} ${isHovered && styles.hovered}`}
          >
            <div
              onClick={handleOpenModal}
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            >
              새로운 대시보드 추가
              <Image
                src="/images/plusIcon.svg"
                width={20}
                height={20}
                alt="Invite button"
              />
            </div>
          </div>
          {dashboardListEmpty ? (
            <>
              <div
                className={`${styles.clickIcon} ${isHovered && styles.hovered}`}
              >
                <img
                  onClick={handleOpenModal}
                  onMouseEnter={handleMouseIn}
                  onMouseLeave={handleMouseOut}
                  src="/images/clickIcon.png"
                  alt="Click Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className={styles.emptyIcon}>
                <Image
                  src="/images/emptyIcon.png"
                  alt="Empty Icon"
                  width={130}
                  height={130}
                />
                <div>현재 속한 대시보드가 없어요</div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <DashboardList
          size={6}
          myDashboardPage={true}
          onEmpty={setDashboardListEmpty}
        />
        <InvitedList />
      </div>
    </div>
  );
};

export default MyDashboard;
