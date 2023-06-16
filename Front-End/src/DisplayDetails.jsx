import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./AddDoctor.css";

export const DisplayDetails = (props) => {
  const userDetails = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "password123",
    role: "user",
  };

  const babyDetails = {
    id: 1,
    name: "Baby Doe",
    dateOfBirth: "2022-01-01",
    gender: "Male",
    bloodType: "A+",
    birthWeight: 3.5,
    birthLength: 50,
    eyeColor: "Blue",
    hairColor: "Blonde",
    skinColor: "Fair",
    nationality: "USA",
    birthPlace: "New York",
    birthHospital: "ABC Hospital",
    parentInformation: "John and Jane Doe",
    contactInformation: "123-456-7890",
    medicalConditions: "None",
    allergies: "None",
    immunizationRecords: "Up to date",
    growthRecords: "Normal",
    developmentalMilestones: "On track",
  };

  return (
    <div className="add-doctor-container">
      <Header />

      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(userDetails).map(([field, value]) => (
            <tr key={field}>
              <td>{field}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Baby Details</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(babyDetails).map(([field, value]) => (
            <tr key={field}>
              <td>{field}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
};


