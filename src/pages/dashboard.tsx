import Column from "@/components/Column/Column";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import MyListLayout from "@/components/MyListLayout/MyListLayout";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";

const test = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      <DashboardLayout>
        <Column />
      </DashboardLayout>
    </>
  );
};

export default test;
