import axios from "@/lib/axios";
import { DashboardInvitations } from "@/types/interface";

const deleteDashboardInvitation = async (
  dashboardId: string | undefined,
  invitationId: number
) => {
  const { data } = await axios.delete<DashboardInvitations>(
    `/dashboards/${dashboardId}/invitations/${invitationId}`
  );
  return data;
};

export default deleteDashboardInvitation;
