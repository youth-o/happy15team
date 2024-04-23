import Link from "next/link";
import styles from "./MainHeader.module.css";
import Image from "next/image";

function MainHeader() {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <Image
          src="/images/smallLogo.svg"
          className={styles.logo}
          width={115}
          height={35}
          alt="로고이미지"
        />
      </Link>
      <div>
        <Link href="/signin" className={styles.link}>
          로그인
        </Link>
        <Link href="/signup" className={`${styles.link} ${styles.signup}`}>
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default MainHeader;
