import { useRouter } from "next/router";
import styles from "@/components/Buttons/ReturnButton/ReturnButton.module.css";
import Image from "next/image";

function ReturnButton() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.back();
    //이전 페이지로 이동할 수 있습니다.
  };

  return (
    <button
      className={styles.returnButton}
      type="button"
      onClick={handleButtonClick}
    >
      <Image
        src="/images/arrow-backward-black.svg"
        alt="뒤로가기 아이콘"
        width={20}
        height={20}
      />
      돌아가기
    </button>
  );
}

export default ReturnButton;
