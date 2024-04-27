import React from "react";
import styles from "./EmptyInvitations.module.css";
import Image from "next/image";

const EmptyInvitations = () => {
  return (
      <div className={styles.Wrapper}>
        <Image
          src="/images/inviteZeroIcon.png"
          alt="Invited Icon"
          width={130}
          height={130}
        />
        <div>아직 초대받은 대시보드가 없어요</div>
      </div>
  );
};

export default EmptyInvitations;
