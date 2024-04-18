import NavButtons from "./NavButtons/NavButtons";
import NavParticipants from "./NavParticipants/NavParticipants";
import NavTitle from "./NavTitle/NavTitle";
import NavUserProfile from "./NavUserProfile/NavUserProfile";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";
import setModals from "@/lib/zustand";
import InviteModal from "../Modals/InviteModal/InviteModal";
import { Fragment } from "react";

const Nav = () => {
  const router = useRouter();
  const path = router.pathname;
  const { modalState }: any = setModals();

  return (
    <Fragment>
      <div className={styles.navWrapper}>
        <div className={styles.section1}>
          <NavTitle pathName={path} />
        </div>
        <div className={styles.sectionWrapper}>
          <div
            className={path === "/mydashboard" ? styles.myDashBoard : styles.section2}
          >
            <NavButtons />
            <NavParticipants />
            <div className={styles.vr} />
          </div>
          <NavUserProfile />
        </div>
      </div>
      {modalState && <InviteModal />}
    </Fragment>
  );
};

export default Nav;
