import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import DashboardList from "../DashboardList/DashboardList";
import modalState from "@/lib/modalState";
import ModalBox from "../Modals/ModalBox";

const Sidebar = () => {
  const { openModal, setOpenModal } = modalState();

  const handleOpenModal = () => {
    setOpenModal("openCreateDashboardModal");
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Link href="/mydashboard">
          <Image
            src="/images/sidebarLogo.svg"
            alt="Taskify Logo"
            width={109}
            height={33}
            className={styles.logo}
            priority
          />
        </Link>
        <div className={styles.title}>
          Dash Boards
          <Image
            src="/images/plusIcon.svg"
            alt="Plus Icon"
            width={20}
            height={20}
            onClick={handleOpenModal}
            className={styles.cursorPointer}
          />
        </div>
        <DashboardList size={13} />
      </div>
      {openModal && <ModalBox />}
    </>
  );
};

export default Sidebar;
