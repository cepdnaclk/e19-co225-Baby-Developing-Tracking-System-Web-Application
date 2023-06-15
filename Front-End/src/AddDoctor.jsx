import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./AddDoctor.css"; // Import the CSS file

export const AddDoctor = (props) => {
  const [doctorDetails, setDoctorDetails] = useState({
    specialization: "",
    hospital: "",
    regNo: "",
    babies: [],
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to save the doctor details
    console.log(doctorDetails);
    // Reset the form or navigate to another page
    // navigate("/some-other-page");
  };

  return (
    <div className="add-doctor-container">
      <Header />

      <div className="add-doctor-form-container">
        <div className="h1div">
            <h1 className="h1 display-1  .font-weight-bold">ADD DOCTOR DETAILS</h1>
        </div>
        
        <form className="add-doctor-form" onSubmit={handleSubmit}>
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={doctorDetails.specialization}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="hospital">Hospital</label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            value={doctorDetails.hospital}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="regNo">Registration Number</label>
          <input
            type="text"
            id="regNo"
            name="regNo"
            value={doctorDetails.regNo}
            onChange={handleInputChange}
            required
          />

          {/* Add input fields for babies (if needed) */}
          
          <button type="submit">Save</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};
