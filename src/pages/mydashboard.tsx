import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Nav from "@/components/Nav/Nav";
import GridDashboardList from "@/components/GridDashboardList/GridDashboardList";
import MyListLayout from "@/components/MyListLayout/MyListLayout";
import InvitedList from "@/components/InvitedList/InvitedList";

const MyDashboard: React.FC = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
      <MyListLayout>
        <GridDashboardList />
        <InvitedList />
      </MyListLayout>
    </div>
  );
};

export default MyDashboard;
