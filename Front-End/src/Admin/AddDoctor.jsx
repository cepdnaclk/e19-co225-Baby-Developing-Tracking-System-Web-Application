import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "../Footer";
import "./AddUser.css";
import doctor_service from "../services/doctor_service";

export const AddDoctor = (props) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [hospital, setHospital] = useState("");
  const [regNo, setRegNo] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "role":
        setRole(value);
        break;
      case "hospital":
        setHospital(value);
        break;
      case "regNo":
        setRegNo(value);
        break;
      case "specialization":
        setSpecialization(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the AddDoctor method from the doctor_service
    doctor_service
      .AddDoctor(
        firstName,
        lastName,
        email,
        password,
        role,
        hospital,
        regNo,
        specialization
      )
      .then((response) => {
        // Handle the response or perform any necessary actions
        console.log("Doctor added:", response);
        // Reset the form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setRole("");
        setHospital("");
        setRegNo("");
        setSpecialization("");
      })
      .catch((error) => {
        // Handle any errors that occurred during the API request
        console.error("Error adding doctor:", error);
      });
  };

  return (
    <div className="add-baby-container">
      <Header />

      <div className="add-baby-form-container">
        <div className="h2">
          <h2>ADD DOCTOR DETAILS</h2>
        </div>

        <form className="add-baby-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={role}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="hospital">Hospital</label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            value={hospital}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="regNo">Reg No</label>
          <input
            type="text"
            id="regNo"
            name="regNo"
            value={regNo}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={specialization}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Save</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};
