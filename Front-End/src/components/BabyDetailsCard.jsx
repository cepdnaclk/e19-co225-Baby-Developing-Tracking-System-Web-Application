// BabyDetailsCard.jsx
import "./BabyDetailsCard.css";
import React from "react";
import VaccinationTimeline from "./Timeline";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL_MID = "http://localhost:8080/api/v1/midwife";

const BabyDetailsCard = ({ baby, onClose, babyTableData,callbackFunc,}) => {
  const [babyId, setBabyId] = useState(baby.id);
  const [thisBaby, setThisBaby] = useState(baby);

  useEffect(() => {
    const fetchedBaby = babyTableData.find((baby) => baby.id === babyId);
    setThisBaby(fetchedBaby);
  }, [babyId, babyTableData]);


  const handleVaccineMark = (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;
      console.log(access);

      console.log(API_URL_MID + "/baby_vaccine/mark/" + id);

      axios.put(
        API_URL_MID + "/baby_vaccine/mark/" + id,
        {},
        {
          headers: {
            Authorization: "Bearer " + access,
          },
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    callbackFunc();
  };

  return (
    <div className="baby-details-card border-slate-100 border-8">
      <div className="card-header sticky top-0 bg-white z-10">
        <h3>&nbsp;Baby Details</h3>
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
            <strong>Name:</strong> {thisBaby.babyName}
          </div>
          {/* <div>
            <strong>Age:</strong> {baby.age}
          </div> */}
          <div>
            <strong>Parent Name:</strong> {thisBaby.parentName}
          </div>
          <div>
            <strong>Appointed Doctor Name:</strong> {thisBaby.doctorName
}
          </div>

          <div>
          <strong>Vaccine Details:</strong>
        </div>
        <table className="w-full table-fixed border-collapse rounded-lg scale-90">
          <thead>
            <tr>
              <th className="bg-blue-200 font-bold py-2">
                <button>Vaccine Name</button>
              </th>
              <th className="bg-blue-200 font-bold py-2">
                <button>Due Date</button>
              </th>
              <th className="bg-blue-200 font-bold py-2">
                <button>Status</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {thisBaby.babyVaccinations.map((babyVaccinations) => (
              <tr
                key={babyVaccinations.vaccineName}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="border py-2 px-3 text-center">
                  {babyVaccinations.vaccineName}
                </td>
                <td className="border py-2 px-3 text-center">
                  {babyVaccinations.dueDate}
                </td>
                <td className="border py-2 px-3 text-center">
                  {babyVaccinations.status}
                  {babyVaccinations.status === "Pending" && (
                    <button
                      className="pending-vaccine"
                      onClick={() => handleVaccineMark(babyVaccinations.id)}
                    >
                      Mark
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default BabyDetailsCard;
