import instance from "@/lib/axios";

async function getDashboardMembers(
  token: any,
  dataForMember: { dashboardId: number; page: number; size: number }
) {
  const { dashboardId, page, size } = dataForMember;
  try {
    const response = await instance.get("/members", {
      params: {
        dashboardId: dashboardId,
        page: page,
        size: size,
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

export { getDashboardMembers };
