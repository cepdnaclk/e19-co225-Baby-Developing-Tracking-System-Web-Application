// BabyDetailsCard.jsx
import "./BabyDetailsCard.css";
import React from "react";
import VaccinationTimeline from "./Timeline";
import { useState } from "react";

const API_URL = "http://localhost:8080/api/v1/doctor";

const DoctorBabyDetailsCard = ({ baby, onClose }) => {
  const [vaccine, setVaccine] = useState("Select Vaccine Type");
  const [suggestedDate, setSuggestedDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;
      console.log(access);
      console.log({
        vaccine,
        suggestedDate,
      });
      axios
        .post(
          API_URL + "/baby_vaccine/add",
          {
            vaccine,
            suggestedDate,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        )
        .then((response) => {
          console.log(response);
          navigate("/parent");
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="baby-details-card">
      <div className="card-header">
        <h3>
          &nbsp;&nbsp;&nbsp;<strong>Baby Details</strong>
        </h3>
        <button
          className="close-button h-10 w-10 rounded-full bg-white"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="card-content">
        <div className="baby-info">
          <div>
            <strong>Name:</strong> {baby.babyName}
          </div>
          <div>
            <strong>Age:</strong> {baby.babyAge}
          </div>
          <div>
            <strong>Parent Name:</strong> {baby.parentName}
          </div>
          <div>
            <strong>Address:</strong> {baby.address}
          </div>
          <div>
            <strong>Contact Information:</strong> {baby.contactInformation}
          </div>
          <div>
            <strong>Special Information:</strong> {baby.specialInformation}
          </div>
          <div>
            <strong>Appointed Midwife Name:</strong> {baby.midWifeName}
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
            <fieldset className="flex flex-col gap-3">
              <legend>
                <strong>Reccommond a Vaccine</strong>
              </legend>
              <select
                style={{ width: "97%", height: "35px" }}
                value={vaccine}
                onChange={(input) => setVaccine(input.target.value)}
                id="vaccine"
                name="vaccine"
                className="mx-5 px-3 border border-gray-300 rounded-md"
              >
                <option disabled selected hidden>
                  <strong>Select Vaccine Type</strong>
                </option>
                {baby.babyVaccinations.map((vaccine) => (
                  <option>{vaccine.vaccineName}</option>
                ))}
              </select>
              <div className="flex flex-row align-center border-gray-300 justify-start gap-6 border rounded-md ml-5 mr-1 px-4">
                <p className="py-1">Suggest a Date:</p>
                <input
                  type="date"
                  value={suggestedDate}
                  onChange={(input) => setSuggestedDate(input.target.value)}
                  required="requred"
                  className="mx-5 py-1"
                />
              </div>
              <button
                type="submit"
                className="suggest-date-button bg-gray-600 mx-5 w-1/4"
              >
                Reccommond Vaccine
              </button>
            </fieldset>
          </form>
        </div>
        <div className="vaccination-timeline">
          <h4>
            <b>Vaccination Timeline</b>
          </h4>
          {/* <Timeline/> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorBabyDetailsCard;
