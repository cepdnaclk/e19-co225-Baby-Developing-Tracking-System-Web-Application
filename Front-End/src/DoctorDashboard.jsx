/* DoctorDashboard */
import React, { useState,useEffect } from "react";
import axios from "axios";
import BabyDetailsCard from "./BabyDetailsCard";
import AppointmentDetailsCard from "./AppointmentDetailsCard";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Calendar from "./Calender";
import "./MidwifeDashboard.css";
import "./AppointmentDetailsCard.css";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const [selectedBaby, setSelectedBaby] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Sample data for the baby table
  const babyTableData = [
    {
      name: "Alex Peter",
      parentName: "Jenny Fernandes",
      sex: "Male",
      midWifeName: "Midwife 1",
      hasAppointment: true,
    },
    {
      name: "Baby 2",
      parentName: "Parent 2",
      sex: "Female",
      midWifeName: "Midwife 2",
      hasAppointment: false,
    },
    

  ];

  const [selectedBabyTableData,setSelectedBabyTableData] = useState(babyTableData);

  // // Uncomment this to connect the table with the database
  // //(Note that the fields are not correctly matching at the moment)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"));
        const access = token.access_token;
        console.log(access);
        
        const response = await axios.get('http://localhost:8080/api/v1/doctor', {
          headers: {
            "Access-Control-Allow-Origin": true,
            Authorization: "Bearer " + access
          },
        });
  
        setSelectedBabyTableData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);


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
      <div className="doctor-dashboard">
        <div className="relative sm:border my-16 mx-3 rounded-lg p-4 flex-row">
          <h1 className="header text-center font-[500] text-3xl">Doctor Dashboard</h1>


          
        <div className="flex justify-center">
        <Calendar className="calendar" />
          <div className="card-container pb-10 mt-2 h-50">
          <div className="card text-center mt-10 mb-10 border buttom-rounded rounded-b-lg" style={{ flexBasis: '50%' }}>
            <div className="card-header bg-blue-200">
                <div className="text-center font-bold mx-3">Patient</div>
            </div>
            <div className="card-body py-2">
              <h5 className="card-title mx-3">Special title treatment</h5>
              <p className="card-text mx-3">If you want to see them all.</p>
              <a href="#" className="btn btn-primary mx-3">Go somewhere</a>
              <br />
              <button className="btn btn-secondary border rounded-lg text-gray-50 bg-blue-950 hover:scale-105 hover:bg-blue-900 transition-all pt-2 pr-4 pb-2 pl-4 mt-2 mb-2">More</button>
            </div>
          </div>

          <div className="card text-center mt-10 mb-10 rounded  border buttom-rounded rounded-b-lg" style={{ flexBasis: '50%' }}>
            <div className="card-header bg-blue-200">
                <div className="text-center font-bold mx-3">Appointment</div>
            </div>
            <div className="card-body py-2">
              <h5 className="card-title mx-3">Special title treatment</h5>
              <p className="card-text mx-3">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary mx-3">Go somewhere</a>
              <br />
              <button className="btn btn-secondary border rounded-lg text-gray-50 hover:scale-105 transition-all hover:bg-blue-900 bg-blue-950 pt-2 pr-4 pb-2 pl-4 mt-2 mb-2">More</button>
            </div>
          </div>
        </div>

        </div>

          <div className="baby-table sm:mx-10 my-5 scale-60 sm:scale-100 sm:border rounded-lg sm:p-8 sm:pb-12">
            <table className="w-full table-fixed border-collapse rounded-lg">
              <thead>
                <tr>
                  <th className="bg-blue-200 font-bold py-2"><button>Baby Name</button></th>
                  <th className="bg-blue-200 font-bold py-2"><button>Parent Name</button></th>
                  <th className="bg-blue-200 font-bold py-2"><button>Gender</button></th>
                  <th className="bg-blue-200 font-bold py-2">
                    <button>Midwife Name</button>
                  </th>
                  <th className="bg-blue-200 font-bold py-2"><button>Appointment Status</button></th>
                </tr>
              </thead>
              <tbody>
                {selectedBabyTableData.map((baby) => (
                  <tr
                    key={baby.firstName}
                    className="cursor-pointer hover:bg-gray-100"
                    
                  >
                    <td className="border py-2 px-3 text-center" >
                      {baby.babyName}
                    </td>
                    <td className="border py-2 px-3 text-center">
                      {baby.parentName}
                    </td>
                    <td className="border py-2 px-3 text-center" >
                      {baby.gender}</td>
                    <td className="border py-2 px-3 text-center" >
                      {baby.midwifeName}
                    </td>
                    <td className="border py-2 px-2 text-center">
                      {baby.hasAppointment && (
                        <button
                          className="appointment-button blink"
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

export default DoctorDashboard;