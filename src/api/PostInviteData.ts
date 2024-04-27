import instance from "@/lib/axios";

//초대받은 대시보드에 수락, 거절을 하면 보내는 api
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
