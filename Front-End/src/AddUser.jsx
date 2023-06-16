import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./AddUser.css";

export const AddUser = (props) => {
  const [babyDetails, setBabyDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
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
        <div className="h2">
          <h2>ADD USER DETAILS</h2>
        </div>
        
        <form className="add-baby-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={babyDetails.firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="date"
            id="lname"
            name="lname"
            value={babyDetails.lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={babyDetails.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={babyDetails.password}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="role">Role</label>
          <input
            type="number"
            id="role"
            name="rolet"
            value={babyDetails.role}
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

