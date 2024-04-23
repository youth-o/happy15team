import BackButton from "@/components/MyPageBackBtn/MyPageBackBtn";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import EditDashboardTitle from "@/components/EditDashboard/EditDashboardTitle/EditDashboardTitle";
import EditDashboardMembers from "@/components/EditDashboard/EditDashboardMembers/EditDashboardMembers";

function EditDashboardPage() {
  return (
    <>
      <Nav />
      <Sidebar />
      <BackButton />
      <EditDashboardTitle />
      <EditDashboardMembers />
    </>
  );
}

export default EditDashboardPage;
