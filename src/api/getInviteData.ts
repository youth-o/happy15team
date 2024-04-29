import instance from "@/lib/axios";

async function getInviteData(
  token: any,
  invitedData: { dashboardId: number; page: number; size: number }
) {
  const { dashboardId, page, size } = invitedData;
  try {
    const response = await instance.get(
      `/dashboards/${invitedData.dashboardId}/invitations`,
      {
        params: {
          dashboardId: dashboardId,
          page: page,
          size: size,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { getInviteData };
