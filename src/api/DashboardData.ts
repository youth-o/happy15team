import instance from "@/lib/axios";



async function getDashboardData(token: any,id:string){
  try {
    const response = await instance.get(`/dashboards/${id}`, {
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