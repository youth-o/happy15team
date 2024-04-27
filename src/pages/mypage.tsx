import BackButton from "@/components/Mypage/MyPageBackBtn/MyPageBackBtn";
import PasswordForm from "@/components/Mypage/MyPagePasswordForm/MyPagePasswordForm";
import ProfileForm from "@/components/Mypage/MyPageProfileForm/MyPageProfileForm";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";

function MyPage() {
  return (
    <>
      <Nav />
      <Sidebar />
      <BackButton />
      <ProfileForm />
      <PasswordForm />
    </>
  );
}

export default MyPage;
