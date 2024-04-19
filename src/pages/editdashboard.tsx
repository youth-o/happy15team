import BackButton from "@/components/MyPageBackBtn/MyPageBackBtn";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import EditDashboardTitle from "@/components/EditDashboard/EditDashboardTitle/EditDashboardTitle";

function EditDashboardPage() {
  return (
    <>
      <Nav />
      <Sidebar />
      <BackButton />
      <EditDashboardTitle />
    </>
  );
}

export default EditDashboardPage;
