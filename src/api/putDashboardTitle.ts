import axios from "@/lib/axios";
import { Dashboard } from "@/types/interface";

const putDashboardTitle = async (
  dashboardId: number,
  title: string,
  color: string
): Promise<any> => {
  const { data } = await axios.put(`/dashboards/${dashboardId}`, {
    title,
    color,
  });
  return data;
};

export default putDashboardTitle;
