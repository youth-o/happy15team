import React from "react";
import styles from "./DashboardList.module.css";

const DashboardList = () => {
  return <div className={styles.listContainer}>
    <div>
      대시보드 리스트
    </div>
    <div>
      초대받은 리스트
    </div>
  </div>;
};

export default DashboardList;
