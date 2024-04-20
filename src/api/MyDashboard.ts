import instance from "@/lib/axios";

async function getMyDashboardData(token: any, page: number) {
  try {
    const response = await instance.get("/dashboards", {
      
      params: {
        navigationMethod: 'pagination',
        page,
        size: 10
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

