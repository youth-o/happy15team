import instance from "@/lib/axios";

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
