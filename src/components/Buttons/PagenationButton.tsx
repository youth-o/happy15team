import Button from "./Button";
import Image from "next/image";

interface PagenationButtonsProps {
  allPage: number;
  nowPage: number;
  handleBackwardButtonClick: () => void;
  handleForwardButtonClick: () => void;
  isSidebar?: boolean;
}

function PagenationButtons({
  allPage,
  nowPage,
  handleBackwardButtonClick,
  handleForwardButtonClick,
  isSidebar,
}: PagenationButtonsProps) {
  const contatinerStyle = isSidebar ? "todo" : "todo"; // 스타일 추가 해야함미
  const buttonStyle = isSidebar ? "todo" : "todo";
  const spanStyle = isSidebar ? "todo" : "todo";

  return (
    <div className={contatinerStyle}>
      <span className={spanStyle}>
        {allPage} 페이지 중 {nowPage}
      </span>
      <div>
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
export default PagenationButtons;
