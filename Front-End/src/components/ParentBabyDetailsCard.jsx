// BabyDetailsCard.jsx
import "./ParentBabyDetailsCard.css"
import React from 'react';


const ParentBabyDetailsCard = ({baby}) => {
  return (
    <div className="parent-baby-details-card">
      <div className="card-header">
        <h3>Baby Details</h3>
        
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
            <strong>Appointed Doctor Name:</strong> {baby.appointedDoctor}
          </div>
        </div>
        {/* <div className="vaccination-timeline">
          <h4>Vaccination Timeline</h4>
          <VaccinationTimeline/>
        </div> */}
      </div>
    </div>
  );
};

export default ParentBabyDetailsCard;
