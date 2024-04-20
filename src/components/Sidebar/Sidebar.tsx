import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import DashboardList from "./DashboardList/DashboardList";
import CreateModal from "@/components/Modals/CreateDashboardModal/CreateModal";
import setModals from "@/lib/zustand";

const Sidebar: React.FC = () => {
  const { openCreateModal } = setModals();
  const { createModalState }: any = setModals();

  return (
    <>
      <div className={styles.sidebar}>
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
            onClick={openCreateModal}
            className={styles.cursorPointer}
          />
        </div>
        <div className={styles.hover}>
          <DashboardList />
        </div>
        <div className={styles.pageBtn}>
          
        </div>
      </div>
      {createModalState && <CreateModal />}
    </>
  );
};

export default Sidebar;
