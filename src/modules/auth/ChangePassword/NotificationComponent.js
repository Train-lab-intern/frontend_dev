import React from 'react';

export function NotificationComponent({ message }) {
  return (
    <div className="notification">
      <p className="change-password-message">{message}</p>
    </div>
  );
}
