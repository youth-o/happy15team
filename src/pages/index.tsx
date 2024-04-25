import MainFooter from "@/components/Main/MainFooter/MainFooter";
import MainHeader from "@/components/Main/MainHeader/MainHeader";
import MainSection from "@/components/Main/MainSection/MainSection";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 혹은 다른 저장소에서 토큰을 가져옵니다.
    if (token) {
      // 토큰이 있다면 대시보드 페이지로 이동 원래는 /dashboard/첫번째 대시보드 아이디로 이동해야하는데
      // 일단 그냥 /dashboard 로 이동
      router.push("/mydashboard/");
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
