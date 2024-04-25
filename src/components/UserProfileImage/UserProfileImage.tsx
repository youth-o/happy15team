import { useEffect, useState } from "react";
import styles from "./UserProfileImage.module.css";
import setModals from "@/lib/zustand";

const UserProfileImage = () => {
  const { loginUserData } = setModals();
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
  }, []);

  return (
    <div className={`${styles.UserProfileImage} ${styles[userColor]}`}>
      {loginUserData.email.charAt(0).toUpperCase()}
    </div>
  );
};

export default UserProfileImage;
