import React, { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Nav from "@/components/Nav/Nav";
import Modal from "@/components/Modal/CreateDashboardModal/CreateDashboardModal";
import DashboardList from "@/components/GridDashboardList/GridDashboardList";
import MyListLayout from "@/components/MyListLayout/MyListLayout";

const MyDashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Nav />
      <Sidebar setShowModal={setShowModal} />
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <MyListLayout>
        <DashboardList />
        {/* <InviteList /> */}
      </MyListLayout>
    </div>
  );
};

export default MyDashboard;
