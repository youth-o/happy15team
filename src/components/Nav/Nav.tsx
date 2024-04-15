import NavButtons from "./NavButtons/NavButtons";
import NavParticipants from "./NavParticipants/NavParticipants";
import NavTitle from "./NavTitle/NavTitle";
import NavUserProfile from "./NavUserProfile/NavUserProfile";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const PATH = router.pathname;

  return (
    <>
      <NavTitle pathName={PATH} />
      <NavButtons pathName={PATH} />
      {/* <NavParticipants/> */}
      <NavUserProfile />
    </>
  );
};

export default Nav;
