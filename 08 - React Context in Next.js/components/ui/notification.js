import classes from "./notification.module.css";

const Notification = ({ title, message, status }) => {
  let statusClasses = "";

  switch (statusClasses) {
    case "success":
      statusClasses = classes.success;
      break;
    case "error":
      statusClasses = classes.error;
      break;
    case "pending":
      statusClasses = classes.pending;
      break;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
