import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorBabyDetailsCard from "../components/DoctorBabyDetailsCard";
import DoctorAppointmentDetailsCard from "../components/DoctorAppointmentDetailsCard";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import Calendar from "../components/Calender";
import "../components/AppointmentDetailsCard.css";
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
      appointedMidwife: "Midwife 1",
      hasAppointment: "Pending",
      requestDate: "2023-06-30",
    },
    {
      name: "Baby 2",
      parentName: "Parent 2",
      sex: "Female",
      appointedMidwife: "Midwife 2",
      hasAppointment: "Accepted",
      requestDate: "2023-06-28",
    },
  ];

  const [selectedBabyTableData, setSelectedBabyTableData] =
    useState(babyTableData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"));
        const access = token.access_token;
        console.log(access);

        const response = await axios.get(
          "http://localhost:8080/api/v1/doctor/getAll",
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        );

        setSelectedBabyTableData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Sample data for the calendar

  const handleBabyRowClick = (baby) => {
    setSelectedBaby(baby);
  };

  const handleAppointmentButtonClick = (appointment) => {
    setSelectedAppointment(appointment);
    setSelectedBaby(null);
  };

  const handleAppointmentCardClose = () => {
    setSelectedAppointment(null);
  };

  return (
    <div>
      <Nav />

      <div className="midwife-dashboard">
        <div className="relative sm:border my-[100px] mx-3 rounded-lg p-4 flex-row">
          <h1 className="header text-center font-[500] font-black text-3xl">
            Doctor Dashboard
          </h1>
          <Calendar />
          <div className="card-container flex justify-center ">
            <div className="cards text-center my-8 mx-10 border rounded-lg">
              <div className="card-header px-5">Featured</div>
              <div className="card-body m-5 ">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted p-3">2 days ago</div>
            </div>

            <div className="cards text-center my-8 mx-10 border rounded-lg">
              <div className="card-header px-5">Featured</div>
              <div className="card-body m-5">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted p-3">2 days ago</div>
            </div>
          </div>

          <div className="baby-table sm:mx-10 my-10 scale-60 sm:scale-100 sm:border rounded-lg sm:p-8 sm:pb-12">
            <table className="w-full table-fixed border-collapse rounded-lg">
              <thead>
                <tr>
                  <th className="bg-blue-200 font-bold py-2">
                    <button>Baby Name</button>
                  </th>
                  <th className="bg-blue-200 font-bold py-2">
                    <button>Parent Name</button>
                  </th>
                  <th className="bg-blue-200 font-bold py-2">
                    <button>Sex</button>
                  </th>
                  <th className="bg-blue-200 font-bold py-2">
                    <button>Allocated Midwife</button>
                  </th>
                  <th className="bg-blue-200 font-bold py-2">
                    <button>Appointment</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedBabyTableData.map((baby) => (
                  <tr
                    key={baby.name}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    <td
                      className="border py-2 px-3 text-center"
                      onClick={() => handleBabyRowClick(baby)}
                    >
                      {baby.name}
                    </td>
                    <td
                      className="border py-2 px-3 text-center"
                      onClick={() => handleBabyRowClick(baby)}
                    >
                      {baby.parentName}
                    </td>
                    <td
                      className="border py-2 px-3 text-center"
                      onClick={() => handleBabyRowClick(baby)}
                    >
                      {baby.sex}
                    </td>
                    <td
                      className="border py-2 px-3 text-center"
                      onClick={() => handleBabyRowClick(baby)}
                    >
                      {baby.appointedMidwife}
                    </td>
                    <td className="border py-2 px-2 text-center">
                      {baby.hasAppointment === "Pending" && (
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
          <DoctorBabyDetailsCard
            baby={selectedBaby}
            onClose={() => setSelectedBaby(null)}
          />
        )}
        {selectedAppointment && (
          <DoctorAppointmentDetailsCard
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
