import Link from "next/link";
import styles from "./NavButtons.module.css";
import Image from "next/image";

const NavButtons = () => {
  // TODO
  // 관리버튼 누를시 관리페이지로 이동 & 초대하기 버튼 누를시 초대하기 모달

  return (
    <div className={styles.navButtons}>
      <Link href="/setting">
        <button>
          <Image
            src="/images/setting.svg"
            width={20}
            height={20}
            alt="설정버튼이미지"
          />
          <p>관리</p>
        </button>
      </Link>
      <button>
        <Image
          src="/images/invite.svg"
          width={20}
          height={20}
          alt="설정버튼이미지"
        />
        <p>초대하기</p>
      </button>
    </div>
  );
};

export default NavButtons;
