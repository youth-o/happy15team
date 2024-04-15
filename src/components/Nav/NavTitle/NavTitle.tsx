import { useState } from "react";
import styles from "./NavTitle.module.css";

const NavTitle = ({ pathname }: any) => {
  // TODO
  // pathname이 mydashboard가 아닐때 전역변수에서 대시보드타이틀 받아와서 표시하기

  return (
    <>
      <div className={styles.navTitle}>
        {pathname === "/mydashboard" ? "내 대시보드" : "대시보드이름"}
      </div>
    </>
  );
};
export default NavTitle;
