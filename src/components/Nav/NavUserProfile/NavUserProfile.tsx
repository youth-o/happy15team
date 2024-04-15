import Image from "next/image";
import styles from "./NavUserProfile.module.css";

const NavUserProfile = () => {
  // TODO
  // 유저데이터 받아와서 이름이랑 이미지넣을것
  return (
    <div className={styles.navUserProfile}>
      <Image
        src="/images/profileImageTest.svg"
        width={38}
        height={38}
        alt="유저프로필이미지"
      />
      <span className={styles.userName}>유저이름</span>
    </div>
  );
};

export default NavUserProfile;
