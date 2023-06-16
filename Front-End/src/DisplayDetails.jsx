import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Display.css";

export const DisplayDetails = () => {
    const [userData, setUserData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: ""
    });
  
    const [babyData, setBabyData] = useState({
      name: "",
      dateOfBirth: "",
      gender: "",
      bloodType: "",
      birthWeight: 0,
      birthLength: 0,
      eyeColor: "",
      hairColor: "",
      skinColor: "",
      nationality: "",
      birthPlace: "",
      birthHospital: "",
      parentInformation: "",
      contactInformation: "",
      medicalConditions: "",
      allergies: "",
      immunizationRecords: "",
      growthRecords: "",
      developmentalMilestones: ""
    });
  
    const handleFlightUpdate = (flightId) => {
      // Handle flight update for the given flightId
      console.log("Flight update for ID:", flightId);
    };
  
    const handleFlightDelete = (flightId) => {
      FlightService.deleteFlight(flightId) // Call the deleteFlight method from 'auth'
        .then((data) => {
          console.log("Flight delete response:", data);
          // Update the flightData state by filtering out the deleted flight
          setFlightData((prevFlightData) =>
            prevFlightData.filter((flight) => flight.flightId !== flightId)
          );
        })
        .catch((error) => {
          console.error("Flight delete error:", error);
          // Handle any error that occurred during the delete request
        });
    };
  
    const handleAirportUpdate = (airportCode) => {
      // Handle airport update for the given airportCode
      console.log("Airport update for Code:", airportCode);
    };
  
    const handleAirportDelete = (airportCode) => {
      // Handle airport deletion for the given airportCode
      console.log("Airport delete for Code:", airportCode);
    };
  
    return (
      <div>
        <Header />
        <div className="container">
          <h2 className="h2">USER DETAILS</h2>
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="th">First Name</th>
                <th className="th">Last Name</th>
                <th className="th">Email</th>
                <th className="th">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tr">
                <td className="td">{userData.firstName}</td>
                <td className="td">{userData.lastName}</td>
                <td className="td">{userData.email}</td>
                <td className="td">{userData.role}</td>
              </tr>
            </tbody>
          </table>
  
          <h2 className="h2">BABY DETAILS</h2>
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="th">Name</th>
                <th className="th">Date of Birth</th>
                <th className="th">Gender</th>
                <th className="th">Blood Type</th>
                <th className="th">Birth Weight</th>
                <th className="th">Birth Length</th>
                <th className="th">Eye Color</th>
                <th className="th">Hair Color</th>
                <th className="th">Skin Color</th>
                <th className="th">Nationality</th>
                <th className="th">Birth Place</th>
                <th className="th">Birth Hospital</th>
                <th className="th">Parent Information</th>
                <th className="th">Contact Information</th>
                <th className="th">Medical Conditions</th>
                <th className="th">Allergies</th>
                <th className="th">Immunization Records</th>
                <th className="th">Growth Records</th>
                <th className="th">Developmental Milestones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tr">
                <td className="td">{babyData.name}</td>
                <td className="td">{babyData.dateOfBirth}</td>
                <td className="td">{babyData.gender}</td>
                <td className="td">{babyData.bloodType}</td>
                <td className="td">{babyData.birthWeight}</td>
                <td className="td">{babyData.birthLength}</td>
                <td className="td">{babyData.eyeColor}</td>
                <td className="td">{babyData.hairColor}</td>
                <td className="td">{babyData.skinColor}</td>
                <td className="td">{babyData.nationality}</td>
                <td className="td">{babyData.birthPlace}</td>
                <td className="td">{babyData.birthHospital}</td>
                <td className="td">{babyData.parentInformation}</td>
                <td className="td">{babyData.contactInformation}</td>
                <td className="td">{babyData.medicalConditions}</td>
                <td className="td">{babyData.allergies}</td>
                <td className="td">{babyData.immunizationRecords}</td>
                <td className="td">{babyData.growthRecords}</td>
                <td className="td">{babyData.developmentalMilestones}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  };
  
