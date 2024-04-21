import Sidebar from "@/components/Sidebar/Sidebar";
import Nav from "@/components/Nav/Nav";
import DashboardList from "@/components/DashboardList/DashboardList";
import styles from "./Mydashboard.module.css";
import InvitedList from "@/components/InvitedList/InvitedList";
import React from "react";
import Image from "next/image";
import setModals from "@/lib/zustand";

const MyDashboard: React.FC = () => {
  const { openCreateModal }: any = setModals();

  return (
    <div>
      <Nav />
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.addDashboard}>
          <div onClick={openCreateModal}>
            새로운 대시보드 추가
            <Image
              src="/images/plusIcon.svg"
              width={20}
              height={20}
              alt="초대버튼이미지"
            />
          </div>
        </div>
        <DashboardList itemCount={6} myDashboardPage={true} />
        <InvitedList />
      </div>
    </div>
  );
};

export default MyDashboard;
