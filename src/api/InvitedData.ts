import instance from "@/lib/axios";

//내가 초대받은 대시보드 데이터를 가져오는 api
async function InvitedData(token: any, size: number) {
  try {
    const response = await instance.get("/invitations", {
      
      params: {
        size,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { InvitedData };

