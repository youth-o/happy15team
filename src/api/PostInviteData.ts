import instance from "@/lib/axios";

async function PostInviteData(
  token: any,
  invitedData: { invitedid: number; inviteAccepted: boolean }
) {
  try {
    const response = await instance.put(
      `/invitations/${invitedData.invitedid}`,
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
