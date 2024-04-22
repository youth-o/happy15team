import axios from "@/lib/axios";
import { Dashboard } from "@/types/interface";

const putDashboardTitle = async (
  dashboardId: string | undefined,
  title: string,
  color: string
) => {
  const { data } = await axios.put<Dashboard>(`/dashboards/${dashboardId}`, {
    title,
    color,
  });
  return data;
};

export default putDashboardTitle;
