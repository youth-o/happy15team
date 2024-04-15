import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar.tsx";
import Nav from "@/components/Nav/Nav.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
    </div>
  );
};

export default Home;
