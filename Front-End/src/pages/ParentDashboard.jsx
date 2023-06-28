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
import AuthService from "../services/auth.service";
import MakeAppointment from "../components/MakeAppointment";

const ParentDashboard = () => {
  const [selectedBaby, setSelectedBaby] = useState(null);
  const [isBabyNotAdded, setIsBabyAdded] = useState(true);
  const [selectedTab, setSelectedTab] = useState("height");
  const [MakeAppointments, setMakeAppointments] = useState(null)

  const navigate = useNavigate();

  useEffect(()=>{
    
    const user = AuthService.getCurrentUser();
      if(!user){
        navigate("/authenticate");
      }
      else if (user.role!=="PARENT") {
        console.log(user);
        navigate("/home");
      }
  },[]);

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
        console.log('newz-setz');
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBabyClick = (baby) => {
    setSelectedBaby(babyData);

    console.log("Clicked")
    console.log(selectedBaby)
    
  };

  const handleMakeAppointment = () => {
    setMakeAppointments(1);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  

  return (
    <div>
      <Nav />
      <div className="parent-dashboard">
        <div className="relative mt-[100px] mx-1 sm:mx-10 rounded-lg p-4 flex-row">
          <h1 className="header text-center font-[500] font-black text-3xl">
          "Get ready to Sproutopia your way through parenthood!"
          </h1>
          <br />

          <div className="tabs-container w-full ">
            {isBabyNotAdded && (
            <button
              className="tab-button"
              onClick={() => navigate("/babyregister")}
            >
              Add Baby Details
            </button>
          )}
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
            {!isBabyNotAdded && (<button
              className="tab-button"
              onClick={() => handleBabyClick(babyData)}
            >
              Baby Details
            </button>
            )}
            {isBabyNotAdded && (<button
              className="tab-button"
              onClick={() => handleMakeAppointment()}
            >
              Make an Appointment
            </button>
            )}
          </div>

          {selectedTab === "height" && (
            <div className="height_graph sm:mx-12 my-10 scale-55 sm:scale-100 sm:border rounded-lg sm:p-8 sm:pb-12 flex flex-col shadow-xl shadow-blue-100/50">
              <h2 className="graph-caption font-[500] text-2xl flex py-3 px-5">Growing of height (cm)</h2>
              <div className="flex justify-center">
                <BabyHeight />
              </div>
            </div>
          )}
          {selectedTab === "weight" && (
            <div className="weight_graph sm:mx-12 my-10 scale-55 sm:scale-100 sm:border rounded-lg sm:p-8 sm:pb-12 flex flex-col justify-center flex-wrap shadow-xl shadow-blue-100/50">
              <h2 className="graph-caption font-[500] text-2xl flex py-3 px-5">Growing of Weight (kg)</h2>
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
          {MakeAppointments && <MakeAppointment onClose={() => setMakeAppointments(null)}/>}
        </div>
        
         
      </div>
      <Footer />
    </div>
  );
};

export default ParentDashboard;
