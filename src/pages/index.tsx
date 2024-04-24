import MainFooter from "@/components/Main/MainFooter/MainFooter";
import MainHeader from "@/components/Main/MainHeader/MainHeader";
import MainSection from "@/components/Main/MainSection/MainSection";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getMyDashboardData } from "@/api/getMyDashboardData";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const fetchDashboardData = async () => {
        try {
          const dashboardData = await getMyDashboardData(token, 1, 1); // 첫 번째 대시보드의 데이터
          const firstDashboardId = dashboardData.dashboards[0].id; // 첫 번째 대시보드의 ID
          if (firstDashboardId) {
            router.push(`/dashboard/${firstDashboardId}`); // 대시보드 페이지로 이동
          }
        } catch (error) {
          console.error("Error fetching dashboard data:", error);
          router.push("/dashboard");
        }
      };

      fetchDashboardData();
    }
  }, [router]);

  return (
    <>
      <MainHeader />
      <MainSection />
      <MainFooter />
    </>
  );
};

export default Home;
