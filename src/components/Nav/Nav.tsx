import NavButtons from "./NavButtons/NavButtons";
import NavParticipants from "./NavParticipants/NavParticipants";
import NavTitle from "./NavTitle/NavTitle";
import NavUserProfile from "./NavUserProfile/NavUserProfile";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";

const Nav = () => {
  const router = useRouter();
  const PATH = router.pathname;

  return (
    <div className={styles.navWrapper}>
      <div className={styles.section1}>
        <NavTitle pathName={PATH} />
      </div>
      <div className={styles.sectionWrapper}>
        <div
          className={PATH === "/test" ? styles.myDashBoard : styles.section2}
        >
          <NavButtons />
          <NavParticipants />
          <div className={styles.vr} />
        </div>
        <NavUserProfile />
      </div>
    </div>
  );
};

export default Nav;
