import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import DashboardList from "../DashboardList/DashboardList";
import CreateDashboardModal from "@/components/Modals/CreateDashboardModal/CreateDashboardModal";
import setModals from "@/lib/zustand";

const Sidebar = () => {
  const { openCreateDashboardModal } = setModals();
  const { createDashboardModalState }: any = setModals();

  return (
    <>
      <div className={styles.wrapper}>
        <Link href="/">
          <Image
            src="/images/sidebarLogo.svg"
            alt="Taskify Logo"
            width={109}
            height={33}
          />
        </Link>
        <div className={styles.title}>
          Dash Boards
          <Image
            src="/images/plusIcon.svg"
            alt="Plus Icon"
            width={20}
            height={20}
            onClick={openCreateDashboardModal}
            className={styles.cursorPointer}
          />
        </div>
        <DashboardList size={10} />
      </div>
      {createDashboardModalState && <CreateDashboardModal />}
    </>
  );
};

export default Sidebar;
