import instance from "@/lib/axios";
import { PAGENATION_SIZE } from "@/constants/pagenation";
import { DashboardInvitations } from "@/types/interface";

const getDashboardInvitations = async (dashboardId: number, page?: number) => {
  const { data } = await instance.get<DashboardInvitations>(
    `/dashboards/${dashboardId}/invitations`,
    {
      params: {
        size: PAGENATION_SIZE.DASHBOARD.INVITATIONS,
        page,
      },
    }
  );
  return data;
};

export default getDashboardInvitations;
