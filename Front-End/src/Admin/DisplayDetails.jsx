import React, { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "./Header";
import "./Display.css";

export const DisplayDetails = () => {
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    role: "Admin",
  });

  const [babyData, setBabyData] = useState({
    name: "Emma",
    dateOfBirth: "2022-01-01",
    gender: "Female",
    bloodType: "O+",
    birthWeight: 3.2,
    birthLength: 50,
    eyeColor: "Blue",
    hairColor: "Blonde",
    skinColor: "Fair",
    nationality: "American",
    birthPlace: "New York",
    birthHospital: "St. Mary's Hospital",
    parentInformation: "John Doe, Jane Doe",
    contactInformation: "johndoe@example.com",
    medicalConditions: "None",
    allergies: "None",
    immunizationRecords: "Up to date",
    growthRecords: "Normal",
    developmentalMilestones: "Meeting milestones",
  });

  const handleUserUpdate = () => {
    // Handle user update
    console.log("User update");
  };

  const handleUserDelete = () => {
    // Handle user deletion
    console.log("User delete");
  };

  const handleBabyUpdate = () => {
    // Handle baby update
    console.log("Baby update");
  };

  const handleBabyDelete = () => {
    // Handle baby deletion
    console.log("Baby delete");
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
              <th className="th">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <td className="td">{userData.firstName}</td>
              <td className="td">{userData.lastName}</td>
              <td className="td">{userData.email}</td>
              <td className="td">{userData.role}</td>
              <td className="button-container">
                <button onClick={handleUserUpdate}>UPDATE</button>
                <button onClick={handleUserDelete}>DELETE</button>
              </td>
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
              <th className="th">Actions</th>
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
              <td className="button-container">
                <button onClick={handleBabyUpdate}>UPDATE</button>
                <button onClick={handleBabyDelete}>DELETE</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
