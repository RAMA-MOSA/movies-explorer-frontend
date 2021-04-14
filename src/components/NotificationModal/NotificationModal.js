import React from 'react';
import Notification from '../Notification/Notification';

function NotificationModal({
  onClose,
  notificationText,
}) {

  return (
    <div className="notification-modal">
        <div className="notification-modal__overlay"></div>
        <div className="notification-modal__box">
            <button className="notification-modal__close" onClick={onClose}></button>
            <Notification text={notificationText} />
        </div>
    </div>
  )
}

export default NotificationModal;