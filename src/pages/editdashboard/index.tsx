import BackButton from "@/components/Mypage/MyPageBackBtn/MyPageBackBtn";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import EditDashboardTitle from "@/components/EditDashboard/EditDashboardTitle/EditDashboardTitle";
import EditDashboardMembers from "@/components/EditDashboard/EditDashboardMembers/EditDashboardMembers";
import InvitationDetails from "@/components/EditDashboard/InvitationDetails/InvitationDetails";
import useDeleteDashboard from "@/hooks/useDeleteDashboard";
import Button from "@/components/Buttons/Button";
import styles from "./EditDashboard.module.css";

function EditDashboardPage() {
  const { handleDashboardDeleteButtonClick } = useDeleteDashboard();

  return (
    <div>
      <Nav />
      <Sidebar />
      <div className={styles.backbutton}>
        <BackButton />
      </div>
      <div className={styles.form}>
        <EditDashboardTitle />
        <EditDashboardMembers />
        <InvitationDetails />
        <div className={styles.deleteButton}>
          <Button
            variant="ghost"
            type="button"
            onClick={handleDashboardDeleteButtonClick}
          >
            <p className={styles.deletetext}>대시보드 삭제하기</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditDashboardPage;
