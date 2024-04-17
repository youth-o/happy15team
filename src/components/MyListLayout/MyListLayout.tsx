import React from "react";
import styles from "./MyListLayout.module.css";

const MyListLayout = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
export default MyListLayout;
