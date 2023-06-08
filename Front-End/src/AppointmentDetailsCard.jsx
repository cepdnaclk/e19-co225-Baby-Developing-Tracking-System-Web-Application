// AppointmentDetailsCard.jsx

import React from 'react';

const AppointmentDetailsCard = ({ appointment, onClose }) => {
  return (
    <div className="appointment-details-card">
      <div className="card-header">
        <h3>Appointment Details</h3>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="card-content">
        {/* Display appointment details here */}
      </div>
    </div>
  );
};

export default AppointmentDetailsCard;
