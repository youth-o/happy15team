import instance from "@/lib/axios";

async function cancelInvite(token: any, dashboardId: number, memberId: number) {
  try {
    const response = await instance.delete(
      `/dashboards/${dashboardId}/invitations/${memberId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export { cancelInvite };
