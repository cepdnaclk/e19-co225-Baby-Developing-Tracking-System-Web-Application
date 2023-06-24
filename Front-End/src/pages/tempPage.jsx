import React, { useState, useEffect } from "react";
import axios from "axios";
import AppointmentDetailsCard from "../components/AppointmentDetailsCard";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import Calendar from "../components/Calender";
import { useNavigate } from "react-router-dom";
import "./ParentDashboard.css";
import "../components/AppointmentDetailsCard.css";
import ParentBabyDetailsCard from "../components/ParentBabyDetailsCard";
import BabyWeight from "../components/WeightChart";
import BabyHeight from "../components/HeightChart";

const ParentDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("height"); // Initial selected tab is "height"

  const navigate = useNavigate();

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
  const demoBaby = {
    name: "Peter",
    age: 2,
    parentName: "John",
    address: "Kandy",
    specialInformation: "Cute",
  };
  const [selectedBabyTableData, setSelectedBabyTableData] = useState(
    babyTableData
  );
  const [babyData, setBabyData] = useState(demoBaby);

  // Uncomment this to connect the table with the database
  //(Note that the fields are not correctly matching at the moment)
  //(Change the endpoint and fields as necessary)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"));
        const access = token.access_token;
        console.log(access);

        const response = await axios.get(
          "http://localhost:8080/api/v1/doctor",
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"));
        const access = token.access_token;
        console.log(access);

        const response = await axios.get(
          "http://localhost:8080/api/v1/parent/babyNotExist",
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        );

        setIsBabyAdded(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"));
        const access = token.access_token;
        console.log(access);

        const response = await axios.get(
          "http://localhost:8080/api/v1/parent/getBaby",
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        );

        setBabyData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Nav />
      <div className="parent-dashboard">
        <div className="relative sm:border my-[100px] mx-1 sm:mx-4 rounded-lg p-4 flex-row">
          <h1 className="header text-center font-[500] font-black text-3xl">
            Parent Dashboard
          </h1>
          <br />
          <div className="tabs-container">
            <button
              className={`tab-button ${
                selectedTab === "height" ? "active" : ""
              }`}
              onClick={() => handleTabChange("height")}
            >
              Height Graph
            </button>
            <button
              className={`tab-button ${
                selectedTab === "weight" ? "active" : ""
              }`}
              onClick={() => handleTabChange("weight")}
            >
              Weight Graph
            </button>
            <button
              className={`tab-button ${
                selectedTab === "calendar" ? "active" : ""
              }`}
              onClick={() => handleTabChange("calendar")}
            >
              Calendar
            </button>
            <button
              className={`tab-button ${
                selectedTab === "appointment" ? "active" : ""
              }`}
              onClick={() => handleTabChange("appointment")}
            >
              Appointment Table
            </button>
          </div>

          {selectedTab === "height" && (
            <div className="height_graph sm:mx-10 my-10 scale-60 sm:scale-100 sm:border rounded-lg sm:p-8 sm:pb-12 flex flex-col justify-center flex-wrap">
              <h2 className="graph-caption">Growing of height (cm)</h2>
              <div className="flex justify-center">
                <BabyHeight />
              </div>
            </div>
          )}
          {selectedTab === "weight" && (
            <div className="weight_graph sm:mx-10 my-10 scale-60 sm:scale-100 sm:border rounded-lg sm:p-8 sm:pb-12 flex flex-col justify-center flex-wrap">
              <h2 className="graph-caption">Growing of Weight (kg)</h2>
              <div className="flex justify-center">
                <BabyWeight />
              </div>
            </div>
          )}
          {selectedTab === "calendar" && <Calendar />}
          {selectedTab === "appointment" && (
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
                      <button>Allocated Doctor</button>
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
          )}
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

export default ParentDashboard;
