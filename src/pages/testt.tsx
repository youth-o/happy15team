import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./testt.module.css";
import modalState from "@/lib/modalState";

let k = 0;

const modalName = [
  "openCreateDashboardModal",
  "openAddColumnModal",
  "openCheckCardModal",
  "openCreateCardModal",
  "openChangeProfileModal",
  "openEditColumnModal",
  "openEmailExistedModal",
  "openInviteModal",
  "openNicknameErrorModal",
  "openPasswordMismatchModal",
  "openNonExistedUserModal",
  "openRegisterSuccessModal",
  "openSamePasswordErrorModal",
  "openSuccessChangePasswordModal",
  "openEditCardModal",
];

function testt() {
  const { setOpenModal } = modalState();
  const handle = () => {
    setOpenModal(modalName[k]);
    k++;
    console.log(k);
  };

  return (
    <>
      <Sidebar />
      <div className={styles.div}>
        <button onClick={handle}>버튼</button>
      </div>
    </>
  );
}

export default testt;
