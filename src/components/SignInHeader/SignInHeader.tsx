import Image from "next/image";
import styles from "@/components/SignInHeader/SignInHeader.module.css";
import Link from "next/link";

function SignInHeader() {
  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/logo.svg"
          width={200}
          height={280}
          alt="logo"
        />
      </Link>
      <div className={styles.welcome}>오늘도 만나서 반가워요!</div>
    </div>
  );
}

export default SignInHeader;
