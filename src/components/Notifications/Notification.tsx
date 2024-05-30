/* eslint-disable */
import React from 'react';
import styles from './Notifications.module.scss';

type PropsType = {
  messages: string;
  handleClose: () => void;
};

export const Notification: React.FC<PropsType> = ({
  messages,
  handleClose,
}) => {
  const handleCloseNotification = () => {
    handleClose();
  };

  return (
    <div className={styles.wrapper} onClick={handleCloseNotification}>
      <div className={styles.wrapperNotification}>
        <span className={styles.message}>{messages}</span>
      </div>
    </div>
  );
};
