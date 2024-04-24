import styles from "./NavParticipants.module.css";
import { Fragment } from "react";
import UserProfileImage from "@/components/UserProfileImage/UserProfileImage";
import Participants from "../Participants/Participants";

const NavParticipants = ({ dashboardMembers }) => {
  console.log(dashboardMembers);
  const totalCount = dashboardMembers?.length;
  const slicedUsers = dashboardMembers?.slice(0, 4);
  const restUser = totalCount - 4;

  if (!dashboardMembers) return null;

  return (
    <Fragment>
      {dashboardMembers.length <= 4
        ? dashboardMembers.map((user, index) => (
            <div key={index} className={styles.navParticipants}>
              <Participants user={user} />
            </div>
          ))
        : slicedUsers.map((user, index) => (
            <div key={index} className={styles.navParticipants}>
              <Participants user={user} />
            </div>
          ))}
      {dashboardMembers.length > 4 && (
        <div className={styles.restUser}>+{restUser}</div>
      )}
    </Fragment>
  );
};

export default NavParticipants;
