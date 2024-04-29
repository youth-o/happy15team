import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import BackButton from "@/components/Mypage/MyPageBackBtn/MyPageBackBtn";
import PasswordForm from "@/components/Mypage/MyPagePasswordForm/MyPagePasswordForm";
import ProfileForm from "@/components/Mypage/MyPageProfileForm/MyPageProfileForm";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/signin");
    }
  }, []);

  return (
    <>
      <Nav />
      <Sidebar />
      <DashboardLayout>
        <BackButton />
        <ProfileForm />
        <PasswordForm />
      </DashboardLayout>
    </>
  );
}

export default MyPage;
