import Column from "@/components/Column/Column";
import MyListLayout from "@/components/MyListLayout/MyListLayout";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";

const test = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      <MyListLayout>
        <Column />
      </MyListLayout>
    </>
  );
};

export default test;
