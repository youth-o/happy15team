import Link from "next/link";
import styles from "./MainHeader.module.css";
import Image from "next/image";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function MainHeader() {
  const isMobile = useMediaQuery("(max-width:479px)");

  return (
    <div className={styles.nav}>
      {isMobile ? (
        <Image
          src="/images/logoIcon.svg"
          className={styles.logo}
          width={24}
          height={27}
          alt="로고이미지"
        />
      ) : (
        <Image
          src="/images/smallLogo.svg"
          className={styles.logo}
          width={115}
          height={35}
          alt="로고이미지"
        />
      )}
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
