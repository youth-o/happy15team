import { useEffect, useState } from "react";
import usePagenationDashboardInvitations from "@/hooks/usePagenationDashboardInvitationList";
import Image from "next/image";
import PagenationButtons from "@/components/Buttons/PagenationButton";
import InviteList from "../InviteList/InviteList";
import Button from "@/components/Buttons/Button";
import setModals from "@/lib/zustand";
import styles from "./InvitationDetails.module.css";

function InvitationDetails() {
  const {
    data,
    isLoading,
    allPage,
    nowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick,
    handleDeleteButtonClick,
  } = usePagenationDashboardInvitations();

  const [displayData, setDisplayData] = useState(data);
  const { modalState, openModal }: any = setModals();

  useEffect(() => {
    if (!isLoading) {
      setDisplayData(data);
    }
  }, [data, isLoading]);

  return (
    <section className={styles.form}>
      <div className={styles.invitesection}>
        <h1 className={styles.invitetext}>초대 내역</h1>
        <div className={styles.buttonsgap}>
          <PagenationButtons
            allPage={allPage}
            nowPage={nowPage}
            handleBackwardButtonClick={handleBackwardButtonClick}
            handleForwardButtonClick={handleForwardButtonClick}
          />
          <Button
            variant="primary"
            prefix={
              <Image
                src="images/add-box.svg"
                width={20}
                height={20}
                alt="추가하기 박스 아이콘"
              />
            }
            onClick={() => openModal()} // 버튼 클릭 시 모달 열기
          >
            초대하기
          </Button>
        </div>
      </div>
      <div>
        <h2 className={styles.emailtext}>이메일</h2>
        {data?.invitations.length === 0 ? (
          <div>
            <p>초대 내역이 없습니다.</p>
          </div> //이부분이 안됩니다
        ) : (
          <InviteList
            invitations={displayData?.invitations}
            handleDeleteButtonClick={handleDeleteButtonClick}
          />
        )}
      </div>
    </section>
  );
}

export default InvitationDetails;
