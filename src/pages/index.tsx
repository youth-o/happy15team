import { useState } from "react";
import MainFooter from "@/components/Main/MainFooter/MainFooter";
import MainHeader from "@/components/Main/MainHeader/MainHeader";
import MainSection from "@/components/Main/MainSection/MainSection";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getMyDashboardData } from "@/api/getMyDashboardData";
import MyDashboard from "./mydashboard/index";
const Home = () => {
  const router = useRouter();
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const fetchDashboardData = async () => {
        try {
          const dashboardData = await getMyDashboardData(token, 1, 1);
          const firstDashboardId = dashboardData.dashboards[0].id;
          if (firstDashboardId) {
            router.push(`/dashboard/${firstDashboardId}`);
          }
        } catch (error) {
          console.error("Error fetching dashboard data:", error);
          router.push("/mydashboard");
        } finally {
          setInitialDataLoaded(true);
        }
      };

      fetchDashboardData();
    } else {
      setInitialDataLoaded(true);
    }
  }, [router]);

  if (!initialDataLoaded) {
    return null;
  }

  if (!localStorage.getItem("accessToken")) {
    return (
      <>
        <MainHeader />
        <MainSection />
        <MainFooter />
      </>
    );
  }

  return <MyDashboard />;
};

export default Home;
