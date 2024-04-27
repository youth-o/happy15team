import { ReactNode } from "react";
import styles from "./SignLayout.module.css";

function SignLayout({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

export default SignLayout;
