import styles from "./NavTitle.module.css";
import setModals from "@/lib/zustand";
import Image from "next/image";

const NavTitle = ({ pathName }: any) => {
  // TODO
  // pathname이 mydashboard가 아닐때 전역변수에서 대시보드타이틀 받아와서 표시하기
  const { dashboardData }: any = setModals();
  return (
    <>
      <div className={styles.navTitle}>
        {pathName === "/mydashboard" ? "내 대시보드" : dashboardData.title}
        {dashboardData.createdByMe && (
          <Image
            src="/images/crown.svg"
            alt="대쉬보드소유자"
            width={20}
            height={20}
          />
        )}
      </div>
    </>
  );
};
export default NavTitle;
