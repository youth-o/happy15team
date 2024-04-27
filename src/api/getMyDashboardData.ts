import instance from "@/lib/axios";

//내가 속한 대시보드 데이터를 가져오는 api
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

