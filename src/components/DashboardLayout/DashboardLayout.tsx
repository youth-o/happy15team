import styles from "./DashboardLayout.module.css";

const DashboardLayout = ({ children }: any) => (
  <div className={styles.container}>{children}</div>
);
export default DashboardLayout;
