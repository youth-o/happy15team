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
  const handleButtonClick = (modal:string) => {
    setOpenModal(modal);
  };

  return (
    <>
      <Sidebar />
      <div className={styles.center}>
      {modalName.map((modal, index) => (
        <div key={index}>
          <button onClick={() => handleButtonClick(modal)}>
            모달이름 {modal}
          </button>
        </div>
      ))}
      </div>
    </>
  );
}

export default testt;
