import NavButtons from "./NavButtons/NavButtons";
import NavParticipants from "./NavParticipants/NavParticipants";
import NavTitle from "./NavTitle/NavTitle";
import NavUserProfile from "./NavUserProfile/NavUserProfile";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";
import setModals from "@/lib/zustand";
import { Fragment, useEffect, useState } from "react";
import UserService from "@/api/UserService";
import { UserData } from "@/types/interface";
import SignIn from "@/pages/signin";

type userData = Pick<UserData, "id" | "email" | "nickname" | "profileImageUrl">;

const Nav = () => {
  const router = useRouter();
  const path = router.pathname;
  const { dashboardData, setLoginUserData, isFetching }: any = setModals();
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const fetchUserData = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const userData = await UserService.getUserData();
      setLoginUserData({
        id: userData.id,
        email: userData.email,
        nickname: userData.nickname,
        profileImageUrl: userData.profileImageUrl,
      });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/signin");
    } else {
      setInitialDataLoaded(true);
    }
  }, [router]);

  if (!initialDataLoaded) {
    return null;
  }

  if (initialDataLoaded) {
    return (
      <Fragment>
        <div className={styles.navWrapper}>
          <div className={styles.section1}>
            <NavTitle pathName={path} />
          </div>
          <div className={styles.sectionWrapper}>
            <div
              className={
                path === "/mydashboard" ? styles.myDashBoard : styles.section2
              }
            >
              {dashboardData.createdByMe && <NavButtons />}
              <NavParticipants />
              <div className={styles.vr} />
            </div>
            <NavUserProfile />
          </div>
        </div>
      </Fragment>
    );
  }
  return <SignIn />;
};

export default Nav;
