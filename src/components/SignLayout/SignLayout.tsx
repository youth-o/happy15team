import styles from "./SignLayout.module.css";

function SignLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default SignLayout;
