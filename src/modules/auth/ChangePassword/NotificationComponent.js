import React from "react";
export const NotificationComponent = ({ message }) => {
  return (
    <div className="notification">
      <p className="change-password-message">{message}</p>
    </div>
  );
};
