import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./AddBaby.css";

export const AddBaby = (props) => {
  const [babyDetails, setBabyDetails] = useState({
    id: 0,
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
    developmentalMilestones: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBabyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to save the baby details
    console.log(babyDetails);
    // Reset the form or navigate to another page
    // navigate("/some-other-page");
  };

  return (
    <div className="add-baby-container">
      <Header />

      <div className="add-baby-form-container">
        <h2>Add Baby Details</h2>
        <form className="add-baby-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={babyDetails.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={babyDetails.dateOfBirth}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={babyDetails.gender}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="bloodType">Blood Type</label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            value={babyDetails.bloodType}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="birthWeight">Birth Weight</label>
          <input
            type="number"
            id="birthWeight"
            name="birthWeight"
            value={babyDetails.birthWeight}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="birthLength">Birth Length</label>
          <input
            type="number"
            id="birthLength"
            name="birthLength"
            value={babyDetails.birthLength}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="eyeColor">Eye Color</label>
          <input
            type="text"
            id="eyeColor"
            name="eyeColor"
            value={babyDetails.eyeColor}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="hairColor">Hair Color</label>
          <input
            type="text"
            id="hairColor"
            name="hairColor"
            value={babyDetails.hairColor}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="skinColor">Skin Color</label>
          <input
            type="text"
            id="skinColor"
            name="skinColor"
            value={babyDetails.skinColor}
            onChange={handleInputChange}
            required
          />

          {/* Add more input fields for the remaining attributes */}
          
          <button type="submit">Save</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

