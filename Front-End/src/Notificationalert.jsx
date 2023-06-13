import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import "./NotificationAlert.css";

const NotificationAlertIcon = ({ notificationCount }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNotificationClick = () => {
    // Handle notification click event
  };

  return (
    <div className="notification-icon-container">
      <div className="notification-icon" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBell} size="lg" />
        {notificationCount > 0 && (
          <span className="notification-count">{notificationCount}</span>
        )}
      </div>

      {showDropdown && (
        <div className="dropdown">
          {/* Dropdown content */}
          <p>Notification 1</p>
          <p>Notification 2</p>
          <p>Notification 3</p>
          <button onClick={handleNotificationClick}>Clear Notifications</button>
        </div>
      )}
    </div>
  );
};

export default NotificationAlertIcon;
