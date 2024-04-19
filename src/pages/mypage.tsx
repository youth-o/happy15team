import BackButton from "@/components/MyPageBackBtn/MyPageBackBtn";
import PasswordForm from "@/components/MyPagePasswordForm/MyPagePasswordForm";
import ProfileForm from "@/components/MyPageProfileForm/MyPageProfileForm";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import setModals from "@/lib/zustand";
import NicknameErrorModal from "@/components/Modals/NicknameErrorModal/NicknameErrorModal";

function MyPage() {
  const { nicknameError }: any = setModals();
  return (
    <>
      <Nav />
      <Sidebar />
      <BackButton />
      <ProfileForm />
      <PasswordForm />
      {nicknameError && <NicknameErrorModal />}
    </>
  );
}

export default MyPage;
