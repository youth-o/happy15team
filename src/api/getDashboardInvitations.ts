import axios from "@/lib/axios";
import { PAGENATION_SIZE } from "@/constants/pagenation";
import { DashboardInvitations } from "@/types/interface";

const getDashboardInvitations = async (
  dashboardId: string | undefined,
  page?: number
) => {
  const { data } = await axios.get<DashboardInvitations>(
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
