import Link from "next/link";
import styles from "./NavButtons.module.css";
import Image from "next/image";
import setModals from "@/lib/zustand";
const NavButtons = () => {
  // TODO
  // 관리버튼 누를시 관리페이지로 이동 & 초대하기 버튼 누를시 초대하기 모달
  const { openModal }: any = setModals();

  return (
    <div className={styles.navButtons}>
      <Link href="/editdashboard">
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
      <button onClick={openModal}>
        <Image
          src="/images/plusIcon.svg"
          width={20}
          height={20}
          alt="초대버튼이미지"
        />
        <p>초대하기</p>
      </button>
    </div>
  );
};

export default NavButtons;
