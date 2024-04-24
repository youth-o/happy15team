import { getDashboardData } from "@/api/DashboardData";
import Column from "@/components/Column/Column";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import AddColumnModal from "@/components/Modals/AddColumnModal/AddColumnModal";
import CheckCardModal from "@/components/Modals/CardModals/CheckCardModal/CheckCardModal";
import CreateCardModal from "@/components/Modals/CardModals/CreateCardModal/CreateCardModal";
import EditCardModal from "@/components/Modals/CardModals/EditCardModal/EditCardModal";
import EditColumnModal from "@/components/Modals/EditColumnModal/EditColumnModal";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import setModals from "@/lib/zustand";

import { useEffect, useState } from "react";

const dashboard = () => {
  const {
    addColumnModal,
    createCardModal,
    editCardModal,
    checkCardModal,
    editColumnModal,
    dashboardData,
    setDashboardData,
  }: any = setModals();

  const fetchDashboardData = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const dashboardData = await getDashboardData(token);
      setDashboardData({
        id: dashboardData.id,
        title: dashboardData.title,
        userId: dashboardData.userId,
        createdByMe: dashboardData.createdByMe,
      });
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <>
      <Nav />
      <Sidebar />
      <DashboardLayout>
        <Column />
      </DashboardLayout>
      {addColumnModal && <AddColumnModal />}
      {createCardModal && <CreateCardModal />}
      {editCardModal && <EditCardModal />}
      {checkCardModal && <CheckCardModal />}
      {editColumnModal && <EditColumnModal />}
    </>
  );
};

export default dashboard;
