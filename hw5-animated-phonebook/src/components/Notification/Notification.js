import React from "react";
import WarningIcon from "@material-ui/icons/Warning";
import styles from "./Notification.module.css";

const Notification = ({ text }) => (
  <div className={styles.notificationContainer}>
    <WarningIcon />
    <span>{text}</span>
  </div>
);

export default Notification;
