import styles from "./UserProfileImage.module.css";

const UserProfileImage = ({ userData }) => {
  return (
    <div
      className={`${styles.UserProfileImage} ${
        styles[userData.UserProfileImage]
      }`}
    >
      {userData.email.charAt(0)}
    </div>
  );
};

export default UserProfileImage;
