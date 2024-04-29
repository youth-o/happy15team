import Image from "next/image";
import styles from "./NavUserProfile.module.css";
import UserProfileImage from "@/components/UserProfileImage/UserProfileImage";
import setModals from "@/lib/zustand";
import { useRouter } from "next/router";
import { useState } from "react";

const NavUserProfile = () => {
  // TODO
  // 유저데이터 받아와서 이름이랑 이미지넣을것
  const { loginUserData } = setModals();
  const [viewMenu, setViewMenu] = useState(false);

  const router = useRouter();
  const onClick = () => {
    const response = confirm("로그아웃 하시겠습니까?");
    if (!response) return;
    localStorage.removeItem("accessToken");
    router.push("/signin");
  };
  return (
    <div
      className={styles.navUserProfile}
      onClick={() => setViewMenu(!viewMenu)}
    >
      <UserProfileImage />
      <span className={styles.userName}>{loginUserData.nickname}</span>
      {viewMenu && (
        <div className={styles.assigneeWrapper}>
          <span
            onClick={() => router.push("/mypage")}
            className={styles.assignee}
          >
            마이페이지
          </span>
          <span onClick={onClick} className={styles.assignee}>
            로그아웃
          </span>
        </div>
      )}
    </div>
  );
};

export default NavUserProfile;
