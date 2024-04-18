import styles from "./MyPageBackBtn.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function BackButton() {
  const router = useRouter();

  function handleClickBack() {
    router.back();
  }

  return (
    <div className={styles.buttonContainer} onClick={handleClickBack}>
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
