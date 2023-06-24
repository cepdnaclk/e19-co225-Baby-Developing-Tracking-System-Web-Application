// MidwifeDashboard.jsx

import React, { useState,useEffect } from "react";
import axios from "axios";
import BabyDetailsCard from "../components/BabyDetailsCard";
import AppointmentDetailsCard from "../components/AppointmentDetailsCard";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import Calendar from "../components/Calender";
import "./MidwifeDashboard.css";
import "../components/AppointmentDetailsCard.css"

const MidwifeDashboard = () => {
  const [selectedBaby, setSelectedBaby] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  

  // Sample data for the baby table
  const babyTableData = [
    {
      name: "Alex Peter",
      parentName: "Jenny Fernandes",
      sex: "Male",
      appointedDoctor: "Doctor 1",
      hasAppointment: true,
      appointmentDate: "2023-06-30",
    },
    {
      name: "Baby 2",
      parentName: "Parent 2",
      sex: "Female",
      appointedDoctor: "Doctor 2",
      hasAppointment: false,
    },
    // Add more baby data as needed
  ];

  const [selectedBabyTableData,setSelectedBabyTableData] = useState(babyTableData);

  // // Uncomment this to connect the table with the database
  // //(Note that the fields are not correctly matching at the moment)
  // //(Change the endpoint and fields as necessary)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const token = JSON.parse(localStorage.getItem("user"));
  //       const access = token.access_token;
  //       console.log(access);
        
  //       const response = await axios.get('http://localhost:8080/api/v1/doctor', {
  //         headers: {
  //           "Access-Control-Allow-Origin": true,
  //           Authorization: "Bearer " + access
  //         },
  //       });
  
  //       setSelectedBabyTableData(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  

  // Sample data for the calendar
  const calendarData = [
    {
      date: "2023-06-08",
      works: ["Work 1", "Work 2"],
    },
    {
      date: "2023-06-09",
      works: ["Work 3"],
    },
    // Add more calendar data as needed
  ];

  const handleBabyRowClick = (baby) => {
    setSelectedBaby(baby);
  };

  const handleAppointmentButtonClick = (appointment) => {
    setSelectedAppointment(appointment);
    setSelectedBaby(null)
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
      <Nav />
      <div className="midwife-dashboard">
        <div className="relative sm:border my-[100px] mx-3 rounded-lg p-4 flex-row">
          <h1 className="header text-center font-[500] font-black text-3xl">Midwife Dashboard</h1>
          <Calendar />
          <div className="baby-table sm:mx-10 my-10 scale-60 sm:scale-100 sm:border rounded-lg sm:p-8 sm:pb-12">
            <table className="w-full table-fixed border-collapse rounded-lg">
              <thead>
                <tr>
                  <th className="bg-blue-200 font-bold py-2"><button>Baby Name</button></th>
                  <th className="bg-blue-200 font-bold py-2"><button>Parent Name</button></th>
                  <th className="bg-blue-200 font-bold py-2"><button>Sex</button></th>
                  <th className="bg-blue-200 font-bold py-2">
                    <button>Allocated Doctor</button>
                  </th>
                  <th className="bg-blue-200 font-bold py-2"><button>Appointment</button></th>
                </tr>
              </thead>
              <tbody>
                {selectedBabyTableData.map((baby) => (
                  <tr
                    key={baby.name}
                    className="cursor-pointer hover:bg-gray-100"
                    
                  >
                    <td className="border py-2 px-3 text-center" onClick={() => handleBabyRowClick(baby)}>
                      {baby.name}
                    </td>
                    <td className="border py-2 px-3 text-center" onClick={() => handleBabyRowClick(baby)}>
                      {baby.parentName}
                    </td>
                    <td className="border py-2 px-3 text-center" onClick={() => handleBabyRowClick(baby)}>
                      {baby.sex}</td>
                    <td className="border py-2 px-3 text-center" onClick={() => handleBabyRowClick(baby)}>
                      {baby.appointedDoctor}
                    </td>
                    <td className="border py-2 px-2 text-center">
                      {baby.hasAppointment && (
                        <button
                          className="appointment-button blink bg-green-200"
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

        
      </div>
      <Footer />
    </div>
  );
};

export default MidwifeDashboard;
