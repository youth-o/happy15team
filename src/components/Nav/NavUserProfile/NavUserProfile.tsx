import Image from "next/image";
import styles from "./NavUserProfile.module.css";
import UserProfileImage from "@/components/UserProfileImage/UserProfileImage";
import setModals from "@/lib/zustand";
import { useRouter } from "next/router";

const NavUserProfile = () => {
  // TODO
  // 유저데이터 받아와서 이름이랑 이미지넣을것
  const { loginUserData } = setModals();

  const router = useRouter();
  const onClick = () => {
    router.push("/mypage");
  };
  return (
    <div className={styles.navUserProfile} onClick={onClick}>
      <UserProfileImage />
      <span className={styles.userName}>{loginUserData.nickname}</span>
    </div>
  );
};

export default NavUserProfile;
