import { useEffect, useState } from "react";
import usePaginationDashboardMembers from "@/hooks/usePagenationDashboardMembers";
import PagenationButtons from "@/components/Buttons/PagenationButton";
import DashboardList from "@/components/DashboardList/DashboardList";
import styles from "./EditDashboard.module.css";

function EditDashboardMembers() {
  const {
    data,
    isLoading,
    allPage,
    nowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick,
    handleDeleteButtonClick,
  } = usePaginationDashboardMembers();

  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    if (!isLoading) {
      setDisplayData(data);
    }
  }, [data, isLoading]);

  return (
    <section className={styles.form}>
      <div className={styles.group}>
        <h1 className={styles.grouptext}>구성원</h1>
        <PagenationButtons
          allPage={allPage}
          nowPage={nowPage}
          handleBackwardButtonClick={handleBackwardButtonClick}
          handleForwardButtonClick={handleForwardButtonClick}
        />
      </div>
      <div className={styles.list}>
        <h2 className={styles.name}>이름</h2>
      </div>
    </section>
  );
}

export default EditDashboardMembers;
