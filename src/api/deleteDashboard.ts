import instance from "@/lib/axios";

const deleteDashboard = async (dashboardId: string | undefined) => {
  const { data } = await instance.delete(`/dashboards/${dashboardId}`);
  return data;
};

export default deleteDashboard;
