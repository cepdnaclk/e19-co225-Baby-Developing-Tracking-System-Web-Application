import { useState } from "react";
import "./BabyChart.css";
import WeightLineChart from "../Util/WeightLineChart";

const BabyHeight = () => {
  const heightData = [
    { x: 1, y: 31 },
    { x: 2, y: 32 },
    { x: 3, y: 33 },
    { x: 4, y: 34 },
    { x: 5, y: 36 },
    { x: 6, y: 37 },
    { x: 7, y: 38 },
    { x: 8, y: 39 },
    { x: 9, y: 39 },
    { x: 10, y: 41 },
    { x: 11, y: 43 },
    { x: 12, y: 45 },
  ];

  const getMonthName = (month) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month - 1];
  };

  const [userData, setUserData] = useState({
    labels: heightData.map((point) => getMonthName(point.x)),
    datasets: [
      {
        label: "Height (cm)",
        data: heightData,
        borderColor: "blue",
        fill: false,
      },
    ],
  });

  return (
    <div className="baby-chart scale-90 sm:scale-100 w-4/5 flex justify-center">
      <WeightLineChart chartData={userData} />
    </div>
  );
};

export default BabyHeight;
