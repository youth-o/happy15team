import { getDashboardData, getDashboardMebers } from "@/api/DashboardData";
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
import { useRouter } from "next/router";

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
    loginUserData,
  }: any = setModals();
  const [dashboardMembers, setDashboardMembers] = useState([{ userId: "" }]);
  const router = useRouter();
  const { id }: any = router.query;

  const fetchDashboardData = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const dashboardData = await getDashboardData(token, id);
      const dashboardMembers = await getDashboardMebers(token, id);
      setDashboardData({
        id: dashboardData.id,
        title: dashboardData.title,
        userId: dashboardData.userId,
        createdByMe: dashboardData.createdByMe,
      });
      setDashboardMembers(dashboardMembers);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [id]);
  return (
    <>
      <Nav dashboardMembers={dashboardMembers} />
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
