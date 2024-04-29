import instance from "@/lib/axios";

async function deleteMember(
  token: any,
  memberId: number,
) {
  try {
    const response = await instance.delete(
      `/members/${memberId}`,
      {
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

export { deleteMember };
