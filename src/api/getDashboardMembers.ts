import instance from "@/lib/axios";
import { DashboardMembers } from "@/types/interface";

const getDashboardMembers = async (
  dashboardId: string | undefined,
  page?: number,
  size?: number
) => {
  const { data } = await instance.get<DashboardMembers>("/members", {
    params: {
      page,
      size,
      dashboardId,
    },
  });
  return data;
};

export default getDashboardMembers;
