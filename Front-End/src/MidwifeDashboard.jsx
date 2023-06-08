// MidwifeDashboard.jsx

import React, { useState } from 'react';
import BabyDetailsCard from './BabyDetailsCard';
import AppointmentDetailsCard from './AppointmentDetailsCard';
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const MidwifeDashboard = () => {
  const [selectedBaby, setSelectedBaby] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Sample data for the baby table
  const babyTableData = [
    {
      babyName: 'Baby 1',
      parentName: 'Parent 1',
      sex: 'Male',
      appointedDoctor: 'Doctor 1',
      hasAppointment: true,
    },
    {
      babyName: 'Baby 2',
      parentName: 'Parent 2',
      sex: 'Female',
      appointedDoctor: 'Doctor 2',
      hasAppointment: false,
    },
    // Add more baby data as needed
  ];

  // Sample data for the calendar
  const calendarData = [
    {
      date: '2023-06-08',
      works: ['Work 1', 'Work 2'],
    },
    {
      date: '2023-06-09',
      works: ['Work 3'],
    },
    // Add more calendar data as needed
  ];

  const handleBabyRowClick = (baby) => {
    setSelectedBaby(baby);
  };

  const handleAppointmentButtonClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleAppointmentCardClose = () => {
    setSelectedAppointment(null);
  };

  const handleCalendarItemClick = (works) => {
    setSelectedAppointment(works);
  };

  const handleCalendarCardClose = () => {
    setSelectedAppointment(null);
  };

  return (
    <div>
        <Nav/>
        <div className="midwife-dashboard">
          <div className="baby-table">
            <table>
              <thead>
                <tr>
                  <th>Baby Name</th>
                  <th>Parent Name</th>
                  <th>Sex</th>
                  <th>Appointed Doctor</th>
                  <th>Appointment</th>
                </tr>
              </thead>
              <tbody>
                {babyTableData.map((baby) => (
                  <tr
                    key={baby.babyName}
                    onClick={() => handleBabyRowClick(baby)}
                  >
                    <td>{baby.babyName}</td>
                    <td>{baby.parentName}</td>
                    <td>{baby.sex}</td>
                    <td>{baby.appointedDoctor}</td>
                    <td>
                      {baby.hasAppointment && (
                        <button
                          className="appointment-button"
                          onClick={() => handleAppointmentButtonClick(baby)}
                        >
                          Appointment Requested
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {selectedBaby && (
            <BabyDetailsCard
              baby={selectedBaby}
              onClose={() => setSelectedBaby(null)}
            />
          )}
          {selectedAppointment && (
            <AppointmentDetailsCard
              appointment={selectedAppointment}
              onClose={handleAppointmentCardClose}
            />
          )}
          <div className="calendar">
            <div className="calendar-header">
              <h3>Calendar</h3>
            </div>
            <div className="calendar-grid">
              {calendarData.map((item) => (
                <div
                  key={item.date}
                  className="calendar-item"
                  onClick={() => handleCalendarItemClick(item.works)}
                >
                  <span className="calendar-date">{item.date}</span>
                  {item.works.length > 0 && (
                    <span className="calendar-dot" />
                  )}
                </div>
              ))}
            </div>
          </div>
          {selectedAppointment && (
            <AppointmentDetailsCard
              appointment={selectedAppointment}
              onClose={handleCalendarCardClose}
            />
          )}
        </div>
        <Footer/>
    </div>
  );
};

export default MidwifeDashboard;
