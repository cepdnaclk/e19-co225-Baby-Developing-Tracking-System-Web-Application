import "./BabyDetailsCard.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL_DOC = "http://localhost:8080/api/v1/doctor";

const BabyVaccinationEditForm = ({ baby, babyVaccination, onClose }) => {
  const [updateMsg, setUpdateMsg] = useState("");
  const [babyId, setBabyId] = useState(baby.id);
  const [vaccineId, setVaccineId] = useState(babyVaccination.vaccineId);
  const [babyVaccinationId, setBabyVaccinationId] = useState(
    babyVaccination.id
  );
  const [date, setSuggestedDueDate] = useState("");

  const handleVaccineEdit = () => {
    setUpdateMsg("Updated");

    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;

      axios
        .post(
          API_URL_DOC + "/baby_vaccine/update",
          {
            babyId,
            vaccineId,
            date,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setVaccinations(response.data);
        });
    } catch (err) {
      alert(err);
    }
    onClose();
  };
  return (
    <div className="vaccine-edit-card">
      <div className="card-header">
        <h3>Edit Baby Vaccination</h3>
        <button
          className="close-button h-10 w-10 rounded-full bg-white"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="edit-form-container">
        <div>
          <p className="py-1">Baby Name: {baby.babyName}</p>
          <p className="py-1">Baby Vaccination Id: {babyVaccination.id}</p>
          <p className="py-1">
            Baby Vaccination Name: {babyVaccination.vaccineName}
          </p>
          <p className="py-1">Due Date: {babyVaccination.dueDate}</p>
          <p className="py-1">Status: {babyVaccination.status}</p>
        </div>

        <form>
          <p className="py-1">Suggest a Date:</p>
          <input
            value={date}
            type="date"
            onChange={(input) => setSuggestedDueDate(input.target.value)}
            required="requred"
            className="mx-5 py-1"
          />

          <button
            className="rounded bg-blue-400 p-1"
            onClick={handleVaccineEdit}
          >
            <b>Update</b>
          </button>
          <p>{updateMsg}</p>
        </form>
      </div>
    </div>
  );
};

export default BabyVaccinationEditForm;
