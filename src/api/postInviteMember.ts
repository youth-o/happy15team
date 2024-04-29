import instance from "@/lib/axios";

async function PostInviteMember(
  token: any,
  invitedData: { dashboardId: number; email: string }
) {
  try {
    const response = await instance.post(
      `/dashboards/${invitedData.dashboardId}/invitations`,
      {
        email: invitedData.email,
      },
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

export { PostInviteMember };
