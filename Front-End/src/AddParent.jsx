import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./AddUser.css";
import auth from "./services/auth.service";

export const AddParent = (props) => {
  const [parentDetails, setParentDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    isMotherFatherGuardian : "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await auth.signup(
        parentDetails.firstName,
        parentDetails.lastName,
        parentDetails.email,
        parentDetails.password,
        parentDetails.role,
        parentDetails.isMotherFatherGuardian,
      );

      if (response && response.status === 200) {
        const { access_token } = response.data;
        setShowSuccessPopup(true);
        setShowErrorPopup(false);
        // Reset the form
        setParentDetails({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: "",
        });
      } else {
        setShowSuccessPopup(false);
        setShowErrorPopup(true);
      }
    } catch (error) {
      console.error("Error adding user:", error);
      setShowSuccessPopup(false);
      setShowErrorPopup(true);
    }
  };

  return (
    <div className="add-baby-container">
      <Header />

      <div className="add-baby-form-container">
        <div className="h2">
          <h2>ADD PARENT DETAILS</h2>
        </div>

        <form className="add-baby-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={parentDetails.firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={parentDetails.lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={parentDetails.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={parentDetails.password}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={parentDetails.role}
            onChange={handleInputChange}
            required
          />

<       label htmlFor="role">isMotherFatherGuardian</label>
          <input
            type="text"
            id="isMotherFatherGuardian"
            name="isMotherFatherGuardian"
            value={parentDetails.role}
            onChange={handleInputChange}
            required
          />

          {/* Add more input fields for the remaining attributes */}

          <button type="submit">Save</button>
        </form>

        {/* Display success or error message in a popup */}
        {showSuccessPopup && (
          <div className="popup success">
            
            <p>Failed to add user. Please try again.</p>
          </div>
        )}
        {showErrorPopup && (
          <div className="popup error">
            <p>User added successfully.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
