import instance from "@/lib/axios";

//대시보드 생성을 위해 보내는 api
async function PostCreateDashboardData(
  token: any,
  CreateDashboardData: { title: string; color: string; }
) {
  try {
    const response = await instance.post(
      `/dashboards`,
      {
        title: CreateDashboardData.title,
        color: CreateDashboardData.color,
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

export { PostCreateDashboardData };
