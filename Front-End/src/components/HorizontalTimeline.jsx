import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import "./HorizontalTimeline.css";
 
function Timeline() {
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);
 
    const vaccineData = [
      {
        vaccineName: "BCG",
        dueDate: "2022-12-26",
        status: "Pending"
      },
      {
        vaccineName: "Pentavalent and Polio (1st dose)",
        dueDate: "2023-02-26",
        status: "Pending"
      },
      {
        vaccineName: "Hexaxim/Infanrix Hexa (2nd dose)",
        dueDate: "2023-04-26",
        status: "Pending"
      },
      {
        vaccineName: "Pentavalent and Polio (3rd dose)",
        dueDate: "2023-06-26",
        status: "Pending"
      },
      {
        vaccineName: "Japanese Encephalitis (single dose)",
        dueDate: "2023-12-26",
        status: "Pending"
      },
      {
        vaccineName: "Hexaxim/Infanrix Hexa (4th dose)",
        dueDate: "2024-06-26",
        status: "Pending"
      },
      {
        vaccineName: "Pentavalent and Polio (4th dose)",
        dueDate: "2024-06-26",
        status: "Pending"
      },
      {
        vaccineName: "Priorix/MMR (2nd dose)",
        dueDate: "2025-12-26",
        status: "Pending"
      },
    ];    
    
    // Values should be only date
    const VALUES = [
      "2022-12-26",
      "2023-02-26",
      "2023-04-26",
      "2023-06-26",
      "2023-12-26",
      "2024-06-26",
      "2025-12-26"
    ];    
 
    // Description array corresponding to values
    const description = [
      `Vaccine: ${vaccineData[0].vaccineName}, Status: ${vaccineData[0].status}`,
      `Vaccine: ${vaccineData[1].vaccineName}, Status: ${vaccineData[1].status}`,
      `Vaccine: ${vaccineData[2].vaccineName}, Status: ${vaccineData[2].status}`,
      `Vaccine: ${vaccineData[3].vaccineName}, Status: ${vaccineData[3].status}`,
      `Vaccine: ${vaccineData[4].vaccineName}, Status: ${vaccineData[4].status}`,
      `Vaccine: ${vaccineData[5].vaccineName}, Status: ${vaccineData[5].status}`,
      `Vaccine: ${vaccineData[6].vaccineName}, Status: ${vaccineData[6].status}`
    ];      
 
    return (
        <div className="root-div">
            <div style={{
                width: "60%",
                height: "100px",
                margin: "0 auto"
            }}>
                <HorizontalTimeline
                    styles={{ outline: "#050505", foreground: "#036ffc" }}
                    index={value}
                    indexClick={(index) => {
                        setValue(index);
                        setPrevious(value);
                    }}
                    values={VALUES}
                />
            </div>
            <div className="text-center">{description[value]}</div>
        </div>
    );
}
 
export default Timeline;