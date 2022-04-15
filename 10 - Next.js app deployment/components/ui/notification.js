import { createPortal } from "react-dom";
import classes from "./notification.module.css";

const Notification = ({ title, message, status }) => {
  let statusClasses = "";

  switch (status) {
    case "success":
      statusClasses = classes.success;
      break;
    case "error":
      statusClasses = classes.error;
      break;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
};

export default Notification;
