import axios from "@/lib/axios";
import { Dashboard } from "@/types/interface";

const getDashboardDetails = async (dashboardId: string | undefined) => {
  const { data } = await axios.get<Dashboard>(`/dashboards/${dashboardId}`);
  return data;
};

export default getDashboardDetails;
