import { useEffect, useState } from "react";
import styles from "./UserProfileImage.module.css";
import setModals from "@/lib/zustand";
import Image from "next/image";

const UserProfileImage = () => {
  const { loginUserData }: any = setModals();
  const [userColor, setUserColor] = useState("");
  const handleUserColor = () => {
    switch (loginUserData.id % 4) {
      case 0:
        setUserColor("green");
        break;
      case 1:
        setUserColor("blue");
        break;
      case 2:
        setUserColor("orange");
        break;
      case 3:
        setUserColor("purple");
        break;
    }
  };

  useEffect(() => {
    handleUserColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loginUserData.profileImageUrl ? (
        <div className={`${styles.UserProfileImage} ${styles[userColor]}`}>
          {loginUserData.email.charAt(0).toUpperCase()}
        </div>
      ) : (
        <div className={styles.UserProfileImage}>
          <Image
            src={loginUserData?.profileImageUrl}
            width={40}
            height={40}
            alt="유저프로필이미지"
            className={styles.UserProfileImage}
          />
        </div>
      )}
    </>
  );
};

export default UserProfileImage;
