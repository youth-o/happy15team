import styles from "./NavParticipants.module.css";
import { Fragment, useEffect, useState } from "react";
import UserProfileImage from "@/components/UserProfileImage/UserProfileImage";
import Participants from "../Participants/Participants";
import setModals from "@/lib/zustand";

const NavParticipants = () => {
  const { dashboardMembers }: any = setModals();
  const [members, setMembers] = useState<any>();
  const totalCount = members?.length;
  const slicedUsers = members?.slice(0, 4);
  const restUser = totalCount - 4;

  useEffect(() => {
    setMembers(dashboardMembers);
  }, [dashboardMembers]);

  if (!members) return null;

  return (
    <Fragment>
      {members.length <= 4
        ? members.map((user: any, index: any) => (
            <div key={index} className={styles.navParticipants}>
              <Participants user={user} />
            </div>
          ))
        : slicedUsers.map((user: any, index: any) => (
            <div key={index} className={styles.navParticipants}>
              <Participants user={user} />
            </div>
          ))}
      {members.length > 4 && <div className={styles.restUser}>+{restUser}</div>}
    </Fragment>
  );
};

export default NavParticipants;
