import React from "react";
import styles from "./invitedList.module.css";
import Image from "next/image";

const InvitedList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>초대받은 대시보드</h1>
      <div className={styles.iconContainer}>
        <Image
          src="/images/InviteIcon.svg"
          alt="Invited Icon"
          width={100}
          height={100}
        />
        <div>아직 초대받은 대시보드가 없어요</div>
      </div>
    </div>
  );
};

export default InvitedList;
