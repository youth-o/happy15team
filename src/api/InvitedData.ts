import instance from "@/lib/axios";

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

