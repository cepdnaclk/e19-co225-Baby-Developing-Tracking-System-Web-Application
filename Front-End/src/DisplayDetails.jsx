import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./DisplayDetails.css";

export const DisplayDetails = (props) => {
  const [userDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  });

  const [babyDetails] = useState({
    id: 1,
    Name: "",
    DateofBirth: "",
    Gender: "",
    BloodType: "",
    BirthWeight: 0,
    BirthLength: 0,
    EyeColor: "",
    HairColor: "",
    SkinColor: "",
    Nationality: "",
    BirthPlace: "",
    BirthHospital: "",
    ParentInformation: "",
    ContactInformation: "",
    MedicalConditions: "",
    Allergies: "",
    ImmunizationRecords: "",
    GrowthRecords: "",
    DevelopmentalMilestones: ""
  });

  return (
    <div className="details-container">
      <Header />

      <div className="card user-details">
        <h2>User Details</h2>
        <p className="detail">First Name: {userDetails.firstName}</p>
        <p className="detail">Last Name: {userDetails.lastName}</p>
        <p className="detail">Email: {userDetails.email}</p>
        <p className="detail">Password: {userDetails.password}</p>
        <p className="detail">Role: {userDetails.role}</p>
      </div>

      <div className="card baby-details">
        <h2>Baby Details</h2>
        <p className="detail">ID: {babyDetails.id}</p>
        <p className="detail">Name: {babyDetails.Name}</p>
        <p className="detail">Date of Birth: {babyDetails.DateofBirth}</p>
        <p className="detail">Gender: {babyDetails.Gender}</p>
        <p className="detail">Blood Type: {babyDetails.BloodType}</p>
        <p className="detail">Birth Weight: {babyDetails.BirthWeight}</p>
        <p className="detail">Birth Length: {babyDetails.BirthLength}</p>
        <p className="detail">Eye Color: {babyDetails.EyeColor}</p>
        <p className="detail">Hair Color: {babyDetails.HairColor}</p>
        <p className="detail">Skin Color: {babyDetails.SkinColor}</p>
        <p className="detail">Nationality: {babyDetails.Nationality}</p>
        <p className="detail">Birth Place: {babyDetails.BirthPlace}</p>
        <p className="detail">Birth Hospital: {babyDetails.BirthHospital}</p>
        <p className="detail">Parent Information: {babyDetails.ParentInformation}</p>
        <p className="detail">Contact Information: {babyDetails.ContactInformation}</p>
        <p className="detail">Medical Conditions: {babyDetails.MedicalConditions}</p>
        <p className="detail">Allergies: {babyDetails.Allergies}</p>
        <p className="detail">Immunization Records: {babyDetails.ImmunizationRecords}</p>
        <p className="detail">Growth Records: {babyDetails.GrowthRecords}</p>
        <p className="detail">Developmental Milestones: {babyDetails.DevelopmentalMilestones}</p>
      </div>

      <Footer />
    </div>
  );
};
