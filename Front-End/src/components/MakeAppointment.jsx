import React, { useState } from "react";
import dayjs from "dayjs";
import "./AppointmentDetailsCard.css";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

const MakeAppointment = ({ onClose }) => {
  const [Date, setDateTime] = useState("");
  const [role, setRole] = useState("");
  const [venue, setVenue] = useState("");
  console.log(Date);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;
      console.log(access);
      console.log({
        venue,
        Date,
        role,
      });
      axios
        .post(
          "http://localhost:8080/api/v1/parent/appointment",
          {
            role,
            Date,
            venue,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="appointment-details-card flex flex-col p-none">
      <div className="card-header">
        <h3>Make an Appointment</h3>
        <button
          className="close-button h-10 w-10 rounded-full bg-white"
          onClick={onClose}
        >
          <b>X</b>
        </button>
      </div>
      <div className="card-content">
        <div className="Appointment-suggest">
          <form
            className="suggest-date-form flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className="radio-group-role flex justify-left">
              <div className="radio-group-item">
                <label htmlFor="Doctor">Doctor</label>
                <input
                  type="radio"
                  id="Doctor"
                  name="role"
                  value="DOCTOR"
                  checked={role === "DOCTOR"}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>

              <div className="radio-group-item">
                <label htmlFor="Midwife">Midwife</label>
                <input
                  type="radio"
                  id="Midwife"
                  name="role"
                  value="MIDWIFE"
                  checked={role === "MIDWIFE"}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["MobileDateTimePicker"]}>
                <DemoItem>
                  <MobileDateTimePicker
                    value={Date}
                    onChange={(newValue) => setDateTime(newValue.toISOString())}
                    defaultValue={dayjs("2023-06-25T14:36:02.833Z")}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <input
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              type="text"
              placeholder="Venue"
              id="lastname"
              name="lastname"
            />
            <button type="submit" className="suggest-date-button bg-black">
              Make Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
