import React, { useState, useEffect } from "react";
import axios from "axios";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import Calendar from "../components/Calender";
import { useNavigate } from "react-router-dom";
import "./ParentDashboard.css";
import ParentBabyDetailsCard from "../components/ParentBabyDetailsCard";
import BabyWeight from "../components/WeightChart";
import BabyHeight from "../components/HeightChart";

const ParentDashboard = () => {
  const [selectedBaby, setSelectedBaby] = useState(null);
  const [isBabyNotAdded, setIsBabyAdded] = useState(true);
  const [selectedTab, setSelectedTab] = useState("height");

  const navigate = useNavigate();

  // Sample data for the baby table
  const demoBaby =
    {
      id: "1",
      babyName: "Jenny Fernandes",
      midwifeName: "Alex Peter",
      doctorName: "Doctor 1",
      gender: "Male",
      babyVaccinations: [
        {
          vaccineName: "Moderna",
          dueDate: "2023-06-24",
          status: "Pending"
        },
        {
          vaccineName: "Ado Naa",
          dueDate: "2023-07-24",
          status: "Completed"
        }]
    };
  
  
  const [babyData, setBabyData] = useState(demoBaby);
  console.log(babyData)
  

  // // Method to find out whether you have already registered a baby or not
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

  // Method to find out whether you have already registered a baby or not
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

  const handleBabyClick = (baby) => {
    setSelectedBaby(baby);

    console.log("Clicked")
    console.log(baby)
    
  };

  const handleCloseCard = () => {
    setSelectedBaby(null);
  };

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
          {isBabyNotAdded && (
            <button
              className="accept-button mx-10"
              onClick={() => navigate("/babyregister")}
            >
              Add Baby Details
            </button>
          )}

          {/* {!isBabyNotAdded && <ParentBabyDetailsCard baby={babyData} />} */}

          <div className="tabs-container w-full">
            <button
              className={`tab-button ${
                selectedTab === "height" ? "active" : ""
              }`}
              onClick={() => handleTabChange("height")}
            >
              Height Tracker
            </button>
            <button
              className={`tab-button ${
                selectedTab === "weight" ? "active" : ""
              }`}
              onClick={() => handleTabChange("weight")}
            >
              Weight Tracker
            </button>
            <button
              className={`tab-button ${
                selectedTab === "calendar" ? "active" : ""
              }`}
              onClick={() => handleTabChange("calendar")}
            >
              Calendar
            </button>
            {!isBabyNotAdded && <button
              className="tab-button"
              onClick={() => handleBabyClick(babyData)}
            >
              Baby Details
            </button>}
          </div>

          {selectedTab === "height" && (
            <div className="height_graph sm:mx-10 my-10 scale-60 sm:scale-100 sm:border rounded-lg sm:p-8 sm:pb-12 flex flex-col justify-center">
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
          <button className="SpaceButton"></button>
          {selectedBaby && (
          
            <ParentBabyDetailsCard
              baby={selectedBaby}
              onClose={() => setSelectedBaby(null)}
            />
          )} 
        </div>
        
         
      </div>
      <Footer />
    </div>
  );
};

export default ParentDashboard;
