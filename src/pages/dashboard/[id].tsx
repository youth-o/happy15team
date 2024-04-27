import {
  getColumnData,
  getDashboardData,
  getDashboardMebers,
} from "@/api/DashboardData";
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
    setDashboardMembers,
    rerender,
  }: any = setModals();
  const [columnData, setColumnData] = useState<any>([]);
  const router = useRouter();
  const { id }: any = router.query;

  const fetchDashboardData = async () => {
    if (!id) return null;
    const token = localStorage.getItem("accessToken");
    if (token) {
      const dashboardData = await getDashboardData(token, id);
      const dashboardMembers = await getDashboardMebers(token, id);
      const columnData = await getColumnData(token, id);
      setDashboardData({
        id: dashboardData.id,
        title: dashboardData.title,
        userId: dashboardData.userId,
        createdByMe: dashboardData.createdByMe,
      });
      setDashboardMembers(dashboardMembers);
      setColumnData(columnData);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [id, rerender]);
  return (
    <>
      <Nav />
      <Sidebar />
      <DashboardLayout>
        <Column columnData={columnData} />
      </DashboardLayout>
      {addColumnModal && <AddColumnModal />}

      {editCardModal && <EditCardModal />}
      {checkCardModal && <CheckCardModal />}
      {editColumnModal && <EditColumnModal />}
    </>
  );
};

export default dashboard;
