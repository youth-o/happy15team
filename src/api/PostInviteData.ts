import instance from "@/lib/axios";

async function PostInviteData(
  token: any,
  invitedData: { inviterId: number; inviteAccepted: boolean }
) {
  try {
    const response = await instance.put(
      `/invitations/${invitedData.inviterId}`,
      {
        inviteAccepted: invitedData.inviteAccepted,
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

export { PostInviteData };
