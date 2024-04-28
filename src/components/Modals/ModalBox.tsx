import React from "react";
import styles from "./ModalBox.module.css";
import modalState from "@/lib/modalState";
import CreateDashboardModal from "./CreateDashboardModal/CreateDashboardModal";
import AddColumnModal from "./AddColumnModal/AddColumnModal";
import CheckCardModal from "./CardModals/CheckCardModal/CheckCardModal";
import CreateCardModal from "./CardModals/CreateCardModal/CreateCardModal";
import ChangeProfileModal from "./ChangeProfileModal/ChangeProfileModal";
import EditColumnModal from "./EditColumnModal/EditColumnModal";
import EmailExistedModal from "./EmailExistedModal/EmailExistedModal";
import InviteModal from "./InviteModal/InviteModal";
import NicknameErrorModal from "@/components/Modals/NicknameErrorModal/NicknameErrorModal";
import PasswordMismatchModal from "./PasswordMismatchModal/PasswordMismatchModal";
import NonExistedUserModal from "./NonExistedUserModal/NonExistedUserModal";
import RegisterSuccessModal from "./RegisterSuccessModal/RegisterSuccessModal";
import SamePasswordErrorModal from "./SamePasswordErrorModal/SamePasswordErrorModal";
import SuccessChangePasswordModal from "./SuccessChangePasswordModal/SuccessChangePasswordModal";
import { useRouter } from "next/router";

interface ModalName {
  [key: string]: React.ReactNode;
}

const ModalBox = () => {
  const router = useRouter();
  const { openModal, setOpenModal } = modalState();

  const modalName: ModalName = {
    openCreateDashboardModal: <CreateDashboardModal />,
    openAddColumnModal: <AddColumnModal />,
    openCheckCardModal: <CheckCardModal />,
    openCreateCardModal: <CreateCardModal />,
    openChangeProfileModal: <ChangeProfileModal />,
    openEditColumnModal: <EditColumnModal />,
    openEmailExistedModal: <EmailExistedModal />,
    openInviteModal: <InviteModal />,
    openNicknameErrorModal: <NicknameErrorModal />,
    openPasswordMismatchModal: <PasswordMismatchModal />,
    openNonExistedUserModal: <NonExistedUserModal />,
    openRegisterSuccessModal: <RegisterSuccessModal />,
    openSamePasswordErrorModal: <SamePasswordErrorModal />,
    openSuccessChangePasswordModal: <SuccessChangePasswordModal />,
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClickModalOutside = () => {
    if (openModal === "openRegisterSuccessModal") {
      router.push("/signin");
    }
    setOpenModal("");
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClickModalOutside}>
      <div className={styles.modalWrapper} onClick={handleModalClick}>
        {modalName[openModal]}
      </div>
    </div>
  );
};

export default ModalBox;
