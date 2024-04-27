import Link from "next/link";
import styles from "./MainFooter.module.css";
import Image from "next/image";

function MainFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCopyright}>©codeit - 2023</div>
      <div className={styles.contentsContainer}>
        <p className={styles.footerContents}>Privacy Policy</p>
        <p className={styles.footerContents}>FAQ</p>
      </div>
      <div className={styles.footerWebsite}>
        <Link href="https://mail.google.com/" target="_blank">
          <Image
            className={styles.footerImage}
            src="/images/email.svg"
            width={22}
            height={22}
            alt="이메일 로고"
          />
        </Link>
        <Link href="https://facebook.com/" target="_blank">
          <Image
            className={styles.footerImage}
            src="/images/facebook.svg"
            width={22}
            height={22}
            alt="페이스북 로고"
          />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Image
            className={styles.footerImage}
            src="/images/instagram.svg"
            width={22}
            height={22}
            alt="인스타그램 로고"
          />
        </Link>
      </div>
    </div>
  );
}

export default MainFooter;
