import React, { useState } from "react";
import "./AppointmentDetailsCard.css";
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
        <button
          className="close-button h-10 w-10 rounded-full bg-white"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="card-content">
        <p>Baby Name &emsp;: {appointment.babyName}</p>
        <p>Parent Name &ensp;: {appointment.parentName}</p>
        {/* <p>Sex: {appointment.sex}</p> */}
        <p>Appointed Doctor &nbsp;: {appointment.doctorName}</p>
        {appointment.hasAppointment === "Pending" ? (
          <p>
            Requesting Date &nbsp;:{" "}
            <b className="text-red-600">
              {appointment.scheduledTime.substring(0, 10)}
            </b>
          </p>
        ) : (
          <p>
            Sheduled Date &emsp;: {appointment.scheduledTime.substring(0, 10)}
          </p>
        )}
        {appointment.hasAppointment === "Pending" ? (
          <p>
            Requesting Time &nbsp;:{" "}
            <b className="text-red-600">
              {appointment.scheduledTime.substring(0, 10)}
            </b>
          </p>
        ) : (
          <p>
            Sheduled Time &emsp;: {appointment.scheduledTime.substring(11, 16)}
          </p>
        )}
        <p>Appointment Status &nbsp;: {appointment.appointmentStatus}</p>
        {appointment.hasAppointment === "Pending" && (
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
              <button type="submit" className="suggest-date-button bg-black">
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
