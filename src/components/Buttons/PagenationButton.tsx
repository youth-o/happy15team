import Image from "next/image";
import styles from "./PagenationButton.module.css";
import Button from "./Button";

interface PagenationButtonsProps {
  allPage: number;
  nowPage: number;
  handleBackwardButtonClick: () => void;
  handleForwardButtonClick: () => void;
  isSidebar?: boolean;
}

export default function PagenationButtons({
  allPage,
  nowPage,
  handleBackwardButtonClick,
  handleForwardButtonClick,
  isSidebar,
}: PagenationButtonsProps) {
  const containerStyle = `${styles.container} ${
    isSidebar ? styles.sidebar : ""
  }`;
  const buttonStyle = `${styles.button} ${isSidebar ? styles.sidebar : ""}`;
  const spanStyle = `${styles.span} ${isSidebar ? styles.sidebar : ""}`;

  return (
    <div className={containerStyle}>
      <span className={spanStyle}>
        {allPage} 페이지 중 {nowPage}
      </span>
      <div className={styles.buttonBox}>
        <Button
          variant="secondary"
          customStyles={buttonStyle}
          type="button"
          onClick={handleBackwardButtonClick}
        >
          <Image
            src="images/arrow-backward-white.svg"
            width={20}
            height={20}
            alt="뒤로 가기 아이콘"
          />
        </Button>
        <Button
          variant="secondary"
          customStyles={buttonStyle}
          type="button"
          onClick={handleForwardButtonClick}
        >
          <Image
            src="images/arrow-forward-white.svg"
            width={20}
            height={20}
            alt="앞으로 가기 아이콘"
          />
        </Button>
      </div>
    </div>
  );
}
