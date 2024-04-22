import Sidebar from "@/components/Sidebar/Sidebar";
import Nav from "@/components/Nav/Nav";
import DashboardList from "@/components/DashboardList/DashboardList";
import styles from "./Mydashboard.module.css";
import InvitedList from "@/components/InvitedList/InvitedList";
import React, { useState } from "react";
import Image from "next/image";
import setModals from "@/lib/zustand";

const MyDashboard = () => {
  const { openCreateDashboardModal }: any = setModals();
  const [dashboardListEmpty, setDashboardListEmpty] = useState(false);

  return (
    <div>
      <Nav />
      <Sidebar />
      <div className={styles.wrapper}>
        {dashboardListEmpty ? (
          <div className={styles.empty}>대시보드 리스트가 없어요ㅠㅠ</div>
        ) : (
          <div onClick={openCreateDashboardModal} className={styles.addDashboard}>
            새로운 대시보드 추가
            <Image
              src="/images/plusIcon.svg"
              width={20}
              height={20}
              alt="초대버튼이미지"
            />
          </div>
        )}
        <DashboardList
          itemCount={6}
          myDashboardPage={true}
          onEmpty={setDashboardListEmpty}
        />
        <InvitedList />
      </div>
    </div>
  );
};

export default MyDashboard;
