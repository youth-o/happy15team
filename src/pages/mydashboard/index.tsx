import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Nav from "@/components/Nav/Nav";
import GridDashboardList from "@/components/GridDashboardList/GridDashboardList";
import styles from "./Mydashboard.module.css";
import InvitedList from "@/components/InvitedList/InvitedList";

const MyDashboard: React.FC = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className={styles.container}>
        <GridDashboardList />
        <InvitedList />
      </div>
    </div>
  );
};

export default MyDashboard;
