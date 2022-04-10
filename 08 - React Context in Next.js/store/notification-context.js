import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (
      notification &&
      (notification.status === "success" || notification.status === "error")
    ) {
      setTimeout(() => showNotification(null), 4000);
    }
  }, [notification]);

  const showNotification = (notification) => {
    setNotification(notification);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  const context = {
    notification: notification,
    showNotification: showNotification,
    hideNotification: hideNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
