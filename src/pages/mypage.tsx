import ProfileForm from "@/components/MyPageProfileForm/MyPageProfileForm";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";

function MyPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Nav />
      <Sidebar setShowModal={setShowModal} />
      <ProfileForm />
    </>
  );
}

export default MyPage;
