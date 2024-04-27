import instance from "@/lib/axios";
import { DashboardInvitations } from "@/types/interface";

const deleteDashboardInvitation = async (
  dashboardId: number,
  invitationId: number
) => {
  const { data } = await instance.delete<DashboardInvitations>(
    `/dashboards/${dashboardId}/invitations/${invitationId}`
  );
  return data;
};

export default deleteDashboardInvitation;
