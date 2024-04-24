import { useEffect, useState } from "react";
import styles from "./Participants.module.css";

const Participants = ({ user }) => {
  const [userColor, setUserColor] = useState("");
  const handleUserColor = () => {
    switch (user.userId % 4) {
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
      {user?.email.charAt(0)}
    </div>
  );
};

export default Participants;
