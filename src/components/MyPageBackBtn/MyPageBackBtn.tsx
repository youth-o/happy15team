import styles from "./MyPageBackBtn.module.css";
import Image from "next/image";

function BackButton() {
  return (
    <div className={styles.buttonContainer}>
      <Image
        src="/images/back.svg"
        width={20}
        height={20}
        alt="뒤로가기아이콘"
      />
      <p>돌아가기</p>
    </div>
  );
}

export default BackButton;
