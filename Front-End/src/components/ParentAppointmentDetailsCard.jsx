import React, { useState } from "react";
import "./AppointmentDetailsCard.css";
const ParentAppointmentDetailsCard = ({
  appointment,
  onClose,
}) => {

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
        <p><b>Parent Name</b> &ensp;: {appointment.parentName}</p>
        {/* <p>Sex: {appointment.sex}</p> */}
        {appointment.doctorName && <p><b>Appointed Doctor</b> &nbsp;: {appointment.doctorName.substring(0, 10)}</p>}
        {appointment.midwifeName && <p><b>Appointed Midwife</b> &nbsp;: {appointment.midwifeName.substring(0, 10)}</p>}
        {appointment.appointmentStatus === "PENDING" ? (
          <p>
            <b>Requesting Date</b> &nbsp;:{" "}
            <b className="text-red-600">
              {appointment.scheduledTime.substring(0, 10)}
            </b>
          </p>
        ) : (
          <p>
            <b>Sheduled Date</b> &emsp;: {appointment.scheduledTime.substring(0, 10)}
          </p>
        )}
        {appointment.appointmentStatus === "PENDING" ? (
          <p>
            <b>Requesting Time</b> &nbsp;:{" "}
            <b className="text-red-600">
              {appointment.scheduledTime.substring(11, 19)}
            </b>
          </p>
        ) : (
          <p>
            <b>Sheduled Time</b> &emsp;: {appointment.scheduledTime.substring(11, 19)}
          </p>
        )}
        <p><b>Appointment Status</b> &nbsp;: {appointment.appointmentStatus}</p>
      </div>
    </div>
  );
};

export default ParentAppointmentDetailsCard;
