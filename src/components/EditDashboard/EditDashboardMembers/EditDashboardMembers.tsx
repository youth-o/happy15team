import { useEffect, useState } from "react";
import usePaginationDashboardMembers from "@/hooks/usePagenationDashboardMembers";
import PagenationButtons from "@/components/Buttons/PagenationButton";
import DashboardList from "@/components/DashboardList/DashboardList";

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
    <section>
      <div>
        <h1>구성원</h1>
        <PagenationButtons
          allPage={allPage}
          nowPage={nowPage}
          handleBackwardButtonClick={handleBackwardButtonClick}
          handleForwardButtonClick={handleForwardButtonClick}
        />
      </div>
      <div>
        <h2>이름</h2>
        <DashboardList itemCount={13} />
      </div>
    </section>
  );
}

export default EditDashboardMembers;
