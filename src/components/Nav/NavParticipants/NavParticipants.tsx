import Image from "next/image";
import styles from "./NavParticipants.module.css";
import { Fragment } from "react";

const NavParticipants = () => {
  const users = [
    { profileImage: "/images/profileImageTest.svg" },
    { profileImage: "/images/profileImageTest.svg" },
    { profileImage: "/images/profileImageTest.svg" },
    { profileImage: "/images/profileImageTest.svg" },
    { profileImage: "/images/profileImageTest.svg" },
    { profileImage: "/images/profileImageTest.svg" },
  ];

  const totalCount = users.length;
  const slicedUsers = users.slice(0, 4);
  const restUser = totalCount - 4;

  if (!users) return null;

  return (
    <Fragment>
      {users.length <= 4
        ? users.map((user, index) => (
            <div key={index} className={styles.navParticipants}>
              <Image
                src={user.profileImage}
                width={38}
                height={38}
                alt="참가유저프로필이미지"
              />
            </div>
          ))
        : slicedUsers.map((user, index) => (
            <div key={index} className={styles.navParticipants}>
              <Image
                src={user.profileImage}
                width={38}
                height={38}
                alt="참가유저프로필이미지"
              />
            </div>
          ))}
      {users.length > 4 && <div className={styles.restUser}>+{restUser}</div>}
    </Fragment>
  );
};

export default NavParticipants;
