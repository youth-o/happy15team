import Image from "next/image";
import styles from "./NavUserProfile.module.css";
import UserProfileImage from "@/components/UserProfileImage/UserProfileImage";

const NavUserProfile = ({ userData }) => {
  // TODO
  // 유저데이터 받아와서 이름이랑 이미지넣을것
  return (
    <div className={styles.navUserProfile}>
      <UserProfileImage userData={userData} />
      <span className={styles.userName}>{userData.nickname}</span>
    </div>
  );
};

export default NavUserProfile;
