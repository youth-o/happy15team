import { useEffect, useState } from "react";
import styles from "./InvitationDetails.module.css";
import useStore from "@/lib/zustand2";
import { getInviteData } from "@/api/getInviteData";
import dashboardIdState from "@/lib/dashboardIdState";
import { cancelInvite } from "@/api/cancelInvite";
import modalState from "@/lib/modalState";

function EditDashboardMembers() {
  const { savedDashboardId } = dashboardIdState();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const { dataChange, setDataChange } = useStore();
  const { setOpenModal } = modalState();
  let size = 4;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const invitedData = {
          dashboardId: savedDashboardId,
          page: currentPage,
          size: size,
        };
        const invitations = await getInviteData(token, invitedData);
        setItems(invitations.invitations);
        setTotalCount(invitations.totalCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage, dataChange]);

  const handleCancelInvite = (userId: number) => {
    const response = confirm("정말로 취소 하시겠습니까?");
    if (!response) return;
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        await cancelInvite(token, savedDashboardId, userId);
        setDataChange(dataChange + 1);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };

  const handleOpenModal = () => {
    setOpenModal("openInviteModal");
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const page = currentPage;

  const totalPage = Math.ceil(totalCount / size);

  return (
    <section className={styles.form}>
      <div className={styles.group}>
        <h1 className={styles.groupText}>초대내역</h1>
        <div className={styles.pageContainer}>
          <div className={styles.pageDisplay}>
            {totalPage} 페이지 중 {currentPage}
          </div>
          <button
            onClick={currentPage === 1 ? undefined : handlePrevPage}
            className={currentPage === 1 ? styles.close : styles.open}
          >
            {"<"}
          </button>
          <button
            onClick={currentPage < totalPage ? handleNextPage : undefined}
            className={currentPage < totalPage ? styles.open : styles.close}
          >
            {">"}
          </button>
          <button className={styles.Invite} onClick={handleOpenModal}>
            초대하기
          </button>
        </div>
      </div>
      <div>
        <h2 className={styles.name}>이메일</h2>
        {items.map((item, index) => (
          <div className={styles.list}>
            <span>{item.invitee.email}</span>
            <button onClick={() => handleCancelInvite(item.id)}>취소</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EditDashboardMembers;
