import React from "react";
import styles from "./GridDashboardList.module.css";

interface ListDatas {
  text: string;
  color: string;
  crown: boolean;
}

const DashboardList = () => {
  const listDatas = [1,2,3,5,6,7,8,8];

  return (
    <div>
      <div className={styles.gridContainer}>
      <div className={styles.gridItem}>새로운 대시보드</div>
        {listDatas.map((item, index) => (
          <div key={index} className={styles.gridItem}>
            {item}
          </div>
        ))}
      </div>
      <div className="page">
        <button>
          이전
        </button>
        <button>
          다음
        </button>
      </div>
    </div>
  );
};

export default DashboardList;
