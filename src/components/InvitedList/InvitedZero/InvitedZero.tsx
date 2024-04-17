import React from "react";
import styles from "./InvitedZero.module.css";
import Image from "next/image";

const InvitedZero: React.FC = () => {
  return (
      <div className={styles.iconContainer}>
        <Image
          src="/images/InviteIcon.svg"
          alt="Invited Icon"
          width={100}
          height={100}
        />
        <div>아직 초대받은 대시보드가 없어요</div>
      </div>
  );
};

export default InvitedZero;
