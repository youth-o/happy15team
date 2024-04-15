import { useState } from "react";
import NavButtons from "./NavButtons/NavButtons";
import NavParticipants from "./NavParticipants/NavParticipants";
import NavTitle from "./NavTitle/NavTitle";
import NavUserProfile from "./NavUserProfile/NavUserProfile";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  console.log(router);
  const PATH = router.pathname;

  return (
    <>
      <NavTitle pathname={PATH} />
      {/* <NavButtons/>
  <NavParticipants/>
    <NavUserProfile /> */}
    </>
  );
};

export default Nav;
