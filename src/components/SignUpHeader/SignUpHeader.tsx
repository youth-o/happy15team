import Image from "next/image";
import styles from "@/components/SignUpHeader/SignUpHeader.module.css";
import Link from "next/link";

function SignUpHeader() {
  return (
    <div className="headerContainer">
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/logo.svg"
          width={200}
          height={280}
          alt="logo"
        />
      </Link>
      <div className={styles.welcome}>첫 방문을 환영합니다!</div>
    </div>
  );
}

export default SignUpHeader;
