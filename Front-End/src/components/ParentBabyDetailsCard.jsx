import "./BabyDetailsCard.css";
import React from "react";

const ParentBabyDetailsCard = ({ baby, onClose }) => {
  return (
    <div className="baby-details-card max-h-full">
      <div className="card-header">
        <h3>Baby Details</h3>
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
            <strong>Midwife Name:</strong> {baby.midwifeName}
          </div>
          <div>
            <strong>Doctor Name:</strong> {baby.doctorName}
          </div>
          <div>
            <strong>Gender:</strong> {baby.gender}
          </div>
          <br />
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
              {baby.babyVaccinations.map((babyVaccinations) => (
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

export default ParentBabyDetailsCard;
