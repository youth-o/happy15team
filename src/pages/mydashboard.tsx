import React, { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Nav from "@/components/Nav/Nav";
import GridDashboardList from "@/components/GridDashboardList/GridDashboardList";
import MyListLayout from "@/components/MyListLayout/MyListLayout";

const MyDashboard: React.FC = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
      <MyListLayout>
        <GridDashboardList />
        {/* <InviteList /> */}
      </MyListLayout>
    </div>
  );
};

export default MyDashboard;
