import React, { useState } from "react";
import "./AppointmentDetailsCard.css"
const AppointmentDetailsCard = ({
  appointment,
  onAccept,
  onSuggestDate,
  onClose,
}) => {
  const [suggestedDate, setSuggestedDate] = useState("");

  const handleSuggestDateChange = (event) => {
    setSuggestedDate(event.target.value);
  };

  const handleSuggestDateSubmit = (event) => {
    event.preventDefault();
    onSuggestDate(appointment, suggestedDate);
    setSuggestedDate("");
  };

  return (
    <div className="appointment-details-card flex flex-col p-none">
      <div className="card-header">
        <h3>Appointment Details</h3>
        <button className="close-button h-10 w-10 rounded-full bg-white" onClick={onClose}>
          X
        </button>
      </div>
      <div className="card-content">
        <p>Baby Name: {appointment.babyName}</p>
        <p>Parent Name: {appointment.parentName}</p>
        <p>Sex: {appointment.sex}</p>
        <p>Appointed Doctor: {appointment.appointedDoctor}</p>
        <p>Appointment Status: {appointment.hasAppointment}</p>
        {appointment.hasAppointment && (
          <div className="Appointment-suggest">
            <button
              className="accept-button w-full mb-2"
              onClick={() => onAccept(appointment)}
            >
              Accept
            </button>

            <form
              className="suggest-date-form flex flex-col gap-2"
              onSubmit={handleSuggestDateSubmit}
            >
              <p>Else suggest a Date:</p>
              <input
                type="date"
                value={suggestedDate}
                onChange={handleSuggestDateChange}
                required
                className="w-full"
              />
              <button type="submit" className="suggest-date-button">
                Suggest Date
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetailsCard;
