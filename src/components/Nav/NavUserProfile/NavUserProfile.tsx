import Image from "next/image";
import styles from "./NavUserProfile.module.css";
import UserProfileImage from "@/components/UserProfileImage/UserProfileImage";
import setModals from "@/lib/zustand";

const NavUserProfile = () => {
  // TODO
  // 유저데이터 받아와서 이름이랑 이미지넣을것
  const { loginUserData } = setModals();
  return (
    <div className={styles.navUserProfile}>
      <UserProfileImage />
      <span className={styles.userName}>{loginUserData.nickname}</span>
    </div>
  );
};

export default NavUserProfile;
