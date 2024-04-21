import instance from "@/lib/axios";

async function getMyDashboardData(token: any, page: number, size: number) {
  try {
    const response = await instance.get("/dashboards", {
      
      params: {
        navigationMethod: 'pagination',
        page,
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

export { getMyDashboardData };

