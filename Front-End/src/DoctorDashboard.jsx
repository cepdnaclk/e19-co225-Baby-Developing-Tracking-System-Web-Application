import React, { useState } from "react";
import BabyDetailsCard from "./BabyDetailsCard";
import AppointmentDetailsCard from "./AppointmentDetailsCard";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Calendar from "./Calender";
import "./MidwifeDashboard.css";
import "./AppointmentDetailsCard.css"

const DoctorDashboard = () => {
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
    },
    {
      name: "Baby 2",
      parentName: "Parent 2",
      sex: "Female",
      appointedDoctor: "Doctor 2",
      hasAppointment: false,
    },
    

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
      <div className="doctor-dashboard">
        <div className="relative sm:border my-16 mx-3 rounded-lg p-4 flex-row">
          <h1 className="header text-center font-[500] text-3xl">Doctor Dashboard</h1>


          
        <div className="flex justify-center">
          <Calendar />
          <div className="card-container pb-10 mt-2 h-50">
          <div className="card text-center mt-10 mb-10 border buttom-rounded rounded-b-lg" style={{ flexBasis: '50%' }}>
            <div className="card-header">
                <div className="text-center">Patient</div>
            </div>
            <div className="card-body bg-gray-200">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">If you want to see them all.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
              <br />
              <button className="btn btn-secondary border rounded-lg bg-blue-500 pt-2 pr-4 pb-2 pl-4 mt-2 mb-2">More</button>
            </div>
          </div>

          <div className="card text-center mt-10 mb-10 rounded  border buttom-rounded rounded-b-lg" style={{ flexBasis: '50%' }}>
            <div className="card-header">
                <div className="text-center ">Appointment</div>
            </div>
            <div className="card-body bg-gray-200">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
              <br />
              <button className="btn btn-secondary border rounded-lg bg-blue-500 pt-2 pr-4 pb-2 pl-4 mt-2 mb-2">More</button>
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
                  <th className="bg-blue-200 font-bold py-2"><button>Sex</button></th>
                  <th className="bg-blue-200 font-bold py-2">
                    <button>Allocated Date</button>
                  </th>
                  <th className="bg-blue-200 font-bold py-2"><button>Appointment Status</button></th>
                </tr>
              </thead>
              <tbody>
                {babyTableData.map((baby) => (
                  <tr
                    key={baby.name}
                    className="cursor-pointer hover:bg-gray-100"
                    
                  >
                    <td className="border py-2 px-3 text-center" >
                      {baby.name}
                    </td>
                    <td className="border py-2 px-3 text-center">
                      {baby.parentName}
                    </td>
                    <td className="border py-2 px-3 text-center" >
                      {baby.sex}</td>
                    <td className="border py-2 px-3 text-center" >
                      {baby.appointedDoctor}
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