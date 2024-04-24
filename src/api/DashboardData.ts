import instance from "@/lib/axios";



async function getDashboardData(token: any){
  try {
    const response = await instance.get("/dashboards/6427", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
 export { getDashboardData }