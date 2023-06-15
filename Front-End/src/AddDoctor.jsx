import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./AddDoctor.css";

export const AddDoctor = (props) => {
  const [specialization, setSpecialization] = useState("");
  const [hospital, setHospital] = useState("");
  const [regNo, setRegNo] = useState("");

  const navigate = useNavigate();

  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value);
  };

  const handleHospitalChange = (event) => {
    setHospital(event.target.value);
  };

  const handleRegNoChange = (event) => {
    setRegNo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can perform the logic to add the doctor using the entered attributes
    // For simplicity, let's just log the values for now
    console.log("Specialization:", specialization);
    console.log("Hospital:", hospital);
    console.log("Registration No:", regNo);

    // Reset the form fields
    setSpecialization("");
    setHospital("");
    setRegNo("");

    // Navigate to the desired page after adding the doctor
    navigate("/doctors"); // Replace "/doctors" with your desired route
  };

  return (
    <div className="add-doctor-container">
      <Header />

        <div className="add-doctor-form-container">

            <h1 className="h1Doc">DOCTOR LOGIN</h1>
            <form onSubmit={handleSubmit}>
            <div>
              <label className="add-doctor-form-label">Specialization:</label>
              <input className = "add-doctor-form-input"
                type="text"
                value={specialization}
                onChange={handleSpecializationChange}
                
              />
            </div>

            <div>
              <label className="add-doctor-form-label">Hospital:</label>
              <input
                type="text"
                value={hospital}
                onChange={handleHospitalChange}
                className="add-doctor-form-input"
              />
            </div>

            <div>
              <label className="add-doctor-form-label">Registration No:</label>
              <input
                type="text"
                value={regNo}
                onChange={handleRegNoChange}
                className="add-doctor-form-input"
              />
            </div>

            <button type="submit" className="add-doctor-form-button">Add Doctor</button>
          </form>

        </div>
      <Footer />
    </div>
  );
};
