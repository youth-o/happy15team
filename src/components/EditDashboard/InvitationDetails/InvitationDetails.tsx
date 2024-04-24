import { useEffect, useState } from "react";
import usePagenationDashboardInvitations from "@/hooks/usePagenationDashboardInvitationList";
import Image from "next/image";
import PagenationButtons from "@/components/Buttons/PagenationButton";
import InviteList from "../InviteList/InviteList";
import Button from "@/components/Buttons/Button";
import InviteModal from "@/components/Modals/InviteModal/InviteModal";
import setModals from "@/lib/zustand";

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
  const { modalState }: any = setModals();

  useEffect(() => {
    if (!isLoading) {
      setDisplayData(data);
    }
  }, [data, isLoading]);

  return (
    <section>
      <div>
        <h1>초대 내역</h1>
        <div>
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
                src="images/add.svg"
                width={20}
                height={20}
                alt="추가하기 박스 아이콘"
              />
            }
          >
            {modalState && <InviteModal />}
          </Button>
        </div>
      </div>
      <div>
        <h2>이메일</h2>
        {data?.invitations.length === 0 ? (
          <div>
            <p>초대 내역이 없습니다.</p>
          </div>
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
