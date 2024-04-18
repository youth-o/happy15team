import BackButton from "@/components/MyPageBackBtn/MyPageBackBtn";
import PasswordForm from "@/components/MyPagePasswordForm/MyPagePasswordForm";
import ProfileForm from "@/components/MyPageProfileForm/MyPageProfileForm";
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