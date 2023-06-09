import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { generateDate, months } from "./Util/calender";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import axios from "axios";
import { sampleAppointments } from "./SampleAppointments";

const appointmentsEndpoint = "/api/appointments"; // Replace this with the actual API endpoint
const useSampleAppointments = true; // Set this to true to use the sampleAppointments data

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        let response;
        if (useSampleAppointments) {
          response = { data: sampleAppointments }; // Use the sampleAppointments data
        } else {
          response = await axios.get(appointmentsEndpoint, {
            params: {
              date: selectDate.format("YYYY-MM-DD"),
            },
          });
        }

        const appointments = response.data;
        const filteredAppointments = appointments.filter(
          (appointment) => appointment.date === selectDate.format("YYYY-MM-DD")
        );

        setAppointments(appointments);
        setFilteredAppointments(filteredAppointments);
      } catch (error) {
        console.log("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [selectDate]);

  const handlePreviousMonth = () => {
    setToday(today.month(today.month() - 1));
  };

  const handleNextMonth = () => {
    setToday(today.month(today.month() + 1));
  };

  const handleToday = () => {
    setToday(currentDate);
  };

  const handleDateClick = (date) => {
    setSelectDate(date);
  };

  return (
    <div className="calender-style"> 
      <div className="calender-styles flex gap-10 sm:divide-x justify-center  sm:mx-10 my-10 scale-90 sm:scale-100 items-center lg:flex-row flex-col sm:border rounded-lg sm:p-8 sm:pb-12">
        <div className="w-96 h-96">
          <div className="flex justify-between items-center">
            <h1 className="select-none font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex gap-10 items-center">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={handlePreviousMonth}
              />
              <h1
                className="cursor-pointer hover:scale-105 transition-all"
                onClick={handleToday}
              >
                Today
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={handleNextMonth}
              />
            </div>
          </div>
          <div className="grid grid-cols-7">
            {days.map((day, index) => (
              <h1
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => (
                <div
                  key={index}
                  className={`p-2 text-center h-14 grid place-content-center text-sm border-t ${
                    currentMonth ? "" : "text-gray-400"
                  }`}
                >
                  <h1
                    className={`h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none ${
                      appointments.some(
                        (appointment) => appointment.date === date.format("YYYY-MM-DD")) && !date.isSame(currentDate, 'day')
                        ? "bg-blue-200"
                        : ""
                    } ${today ? "bg-red-600 text-white" : ""} ${
                      selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                        ? "bg-black text-white"
                        : ""
                    }`}
                    onClick={() => handleDateClick(date)}
                  >
                    {date.date()}
                  </h1>
                </div>
              )
            )}
          </div>
        </div>
        <div className="h-20 w-96 sm:px-5 sm:h-96">
          <h1 className="font-semibold">
            Appointments for {selectDate.toDate().toDateString()}
          </h1>
          {filteredAppointments.length > 0 ? (
            <ul className="text-gray-400">
              {filteredAppointments.map((appointment) => (
                <li key={appointment.id}>{appointment.title}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No meetings for today.</p>
          )}
        </div>
      </div>
    </div>
  );
}
