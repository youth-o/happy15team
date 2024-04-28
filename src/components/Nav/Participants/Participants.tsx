import { useEffect, useState } from "react";
import styles from "./Participants.module.css";
import Image from "next/image";

const Participants = ({ user }) => {
  const [userColor, setUserColor] = useState("blue");

  const handleUserColor = () => {
    switch (user?.id % 4) {
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


  useEffect(() => {}, []);

  if (!user) return null;

  return (
    <>
      {!user?.profileImageUrl ? (
        <div
          className={`${styles.UserProfileImage} ${
            user.id % 4 === 0
              ? styles.green
              : user.id % 4 === 1
              ? styles.purple
              : user.id % 4 === 2
              ? styles.orange
              : user.id % 4 === 3
              ? styles.blue
              : ""
          }`}
        >
          {user.email
            ? user.email.charAt(0).toUpperCase()
            : user.nickname?.charAt(0).toUpperCase()}
        </div>
      ) : (
        <div className={styles.UserProfileImage}>
          <Image
            src={user.profileImageUrl}
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

export default Participants;
