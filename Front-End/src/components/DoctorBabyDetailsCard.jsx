// BabyDetailsCard.jsx
import "./BabyDetailsCard.css"
import React from 'react';
import VaccinationTimeline from './Timeline';

const DoctorBabyDetailsCard = ({ baby, onClose }) => {
  return (
    <div className="baby-details-card">
      <div className="card-header">
        <h3>Baby Details</h3>
        <button className="close-button h-10 w-10 rounded-full bg-white" onClick={onClose}>
          X
        </button>
      </div>
      <div className="card-content">
        <div className="baby-info">
          <div>
            <strong>Name:</strong> {baby.name}
          </div>
          <div>
            <strong>Age:</strong> {baby.age}
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
            <strong>Appointed Midwife Name:</strong> {baby.appointedMidwife}
          </div>
        </div>
        <div className="vaccination-timeline">
          <h4>Vaccination Timeline</h4>
          <VaccinationTimeline/>
        </div>
      </div>
    </div>
  );
};

export default DoctorBabyDetailsCard;
