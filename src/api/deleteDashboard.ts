import axios from "@/lib/axios";

const deleteDashboard = async (dashboardId: string | undefined) => {
  const { data } = await axios.delete(`/dashboards/${dashboardId}`);
  return data;
};

export default deleteDashboard;
