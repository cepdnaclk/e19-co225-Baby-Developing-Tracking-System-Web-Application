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
          <p className="py-1">
            <b>Baby Name</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:{" "}
            {baby.babyName}
          </p>
          <p className="py-1">
            <b>Baby Vaccination Id</b> &nbsp;&emsp;&emsp;: {babyVaccination.id}
          </p>
          <p className="py-1">
            <b>Baby Vaccination Name</b> &nbsp;: {babyVaccination.vaccineName}
          </p>
          <p className="py-1">
            <b>Due Date</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:{" "}
            {babyVaccination.dueDate}
          </p>
          <p className="py-1">
            <b>Status</b>{" "}
            &ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:{" "}
            {babyVaccination.status}
          </p>
          <br></br>
          <p className="py-1">
            <b>Suggest a Date</b>:
          </p>
        </div>

        <div>
          <form>
            <input
              value={date}
              type="date"
              onChange={(input) => setSuggestedDueDate(input.target.value)}
              required="requred"
              className="mx-5 py-1"
            />
            <button className="update-vaccine" onClick={handleVaccineEdit}>
              <b>Update</b>
            </button>
            <p>{updateMsg}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BabyVaccinationEditForm;
