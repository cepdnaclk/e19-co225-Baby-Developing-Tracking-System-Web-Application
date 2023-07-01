import { useState } from "react";
import "./BabyChart.css";
import WeightLineChart from "../Util/WeightLineChart";

const BabyWeight = () => {
  const weightData = [
    { x: 1, y: 1.8 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2.1 },
    { x: 5, y: 2.3 },
    { x: 6, y: 2.5 },
    { x: 7, y: 2.5 },
    { x: 8, y: 2.6 },
    { x: 9, y: 2.7 },
    { x: 10, y: 2.7 },
    { x: 11, y: 2.9 },
    { x: 12, y: 3 },
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
    labels: weightData.map((point) => getMonthName(point.x)),
    datasets: [
      {
        label: "Weight (kg)",
        data: weightData,
        borderColor: "green",
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

export default BabyWeight;
