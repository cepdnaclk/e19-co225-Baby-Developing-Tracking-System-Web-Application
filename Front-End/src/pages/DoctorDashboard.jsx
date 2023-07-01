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
  const [editCount, setEditCount] = useState(0);

  // Sample data for the baby table
  const babyTableData = [
    {
      id: 1,
      babyName: "Alex Peter",
      parentName: "Jenny Fernandes",
      midWifeName: "Midwife 1",
      gender: "Male",
      hasAppointment: "Pending",
      requestDate: "2023-06-30",
      babyVaccinations: [
        {
          vaccineName: "BCG",
        },
        {
          vaccineName: "Hexaxim/Infanrix Hexa",
        },
        {
          vaccineName: "Pentavalent and Polio (1st dose)",
        },
        {
          vaccineName: "Rotarix/Rotateq (1st dose)",
        },
      ],
    },
    {
      id: 2,
      babyName: "Baby 2",
      parentName: "Eranga Dharmarathne",
      midWifeName: "Midwife 2",
      gender: "Female",
      hasAppointment: "Accepted",
      requestDate: "2023-06-28",
      babyVaccinations: [
        {
          vaccineName: "BCG",
          dueDate: "2023-05-01",
          status: "Pending",
        },
        {
          vaccineName: "Hexaxim/Infanrix Hexa",
        },
        {
          vaccineName: "Pentavalent and Polio (1st dose)",
        },
        {
          vaccineName: "Rotarix/Rotateq (1st dose)",
        },
      ],
    },
  ];

  const appointmentTable = [
    {
      id: 1,
      placementDateTime: "2023-06-25T14:36:02.833Z",
      scheduleDateTime: "2023-06-25T14:36:02.833Z",
      parentName: "Jenny Fernandes",
      babyName: "Alex Peter",
      venue: "string",
      appointmentStatus: "string",
    },
  ];

  const [selectedBabyTableData, setSelectedBabyTableData] = useState([]);

  const [appointmentsSet, setAppointmentsSet] = useState([]);

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

    const fetchAppointments = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"));
        const access = token.access_token;
        console.log(access);

        const response = await axios.get(
          "http://localhost:8080/api/v1/doctor/appointment/get",
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        );

        setAppointmentsSet(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchAppointments();
  }, [DoctorBabyDetailsCard, editCount]);

  // Sample data for the calendar

  const handleBabyRowClick = (baby) => {
    setSelectedBaby(baby);
  };

  const handleAppointmentButtonClick = (appointment) => {
    setSelectedAppointment(appointment);
    console.log(appointment);
    setSelectedBaby(null);
  };

  const handleAppointmentCardClose = () => {
    setSelectedAppointment(null);
  };

  return (
    <div>
      <Nav />

      <div className="doctor-dashboard">
        <div className="relative mt-[100px] mx-3 rounded-lg p-4 flex-row justify-center">
          <h1 className="header text-center font-[500] font-black text-3xl">
            "Doc, you're about to level up in baby care. Let's heal those tiny
            patients like superheroes."
          </h1>
          <Calendar
            appointmentSet={appointmentsSet}
            onClicks={(appointment) =>
              handleAppointmentButtonClick(appointment)
            }
          />
          {console.log(appointmentsSet)}
          {/* <div className="card-container flex justify-center ">
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
          </div> */}

          <div className="baby-table sm:mx-10 my-10 scale-60 sm:scale-100 sm:border rounded-lg sm:p-8 sm:pb-12 shadow-xl shadow-blue-100/50">
            <table className="w-full table-fixed border-collapse rounded-lg">
              <thead>
                <tr>
                  <th className="bg-blue-200 font-bold py-2">
                    <button>Baby Id</button>
                  </th>
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
                    key={baby.id}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    <td
                      className="border py-2 px-3 text-center"
                      onClick={() => handleBabyRowClick(baby)}
                    >
                      {baby.id}
                    </td>
                    <td
                      className="border py-2 px-3 text-center"
                      onClick={() => handleBabyRowClick(baby)}
                    >
                      {baby.babyName}
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
                      {baby.gender}
                    </td>
                    <td
                      className="border py-2 px-3 text-center"
                      onClick={() => handleBabyRowClick(baby)}
                    >
                      {baby.midWifeName}
                    </td>
                    <td className="border py-2 px-2 text-center">
                      {appointmentsSet.some(
                        (appointment) =>
                          appointment.babyName === baby.babyName &&
                          !appointment.appointmentStatus
                      ) && (
                        <button
                          className="appointment-button blink bg-green-200"
                          onClick={() =>
                            handleAppointmentButtonClick(
                              appointmentsSet.find(
                                (appointment) =>
                                  appointment.babyName === baby.babyName &&
                                  !appointment.appointmentStatus
                              )
                            )
                          }
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
            babyTableData={selectedBabyTableData}
            callbackFunc={() => setEditCount(editCount + 1)}
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
