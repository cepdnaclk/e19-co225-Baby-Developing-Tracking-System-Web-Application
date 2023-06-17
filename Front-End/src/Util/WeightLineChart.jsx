import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// export const HeightLineChart = ({ chartData }) =>{
//   return <Line data={chartData} 
//   options= {{
//     scales: {
//         x:{
//             title: {
//                 display: true,
//                 text: 'Month',
//                 font: {
//                     weight: 'bold',
//                     size: 16
//                 }
//             },
//             ticks: {
//                 font : {
//                     weight: 'bold'
//                 }
//             }
//         },
//         y: {
//             title: {
//                 display : true,
//                 text : 'Height (cm)',
//                 font : {
//                     weight : 'bold',
//                     size : 16
//                 }
//             },
//             ticks: {
//                 font: {
//                     weight : 'bold'
//                 }
//             }
//         }
//     }
// }}
//   />;
// }




const WeightLineChart = ({ chartData }) =>{
    return <Line data={chartData} 
    options= {{
      scales: {
          x:{
              title: {
                  display: true,
                  text: 'Month',
                  font: {
                      weight: 'bold',
                      size: 16
                  }
              },
              ticks: {
                  font : {
                      weight: 'bold'
                  }
              }
          },
          y: {
              title: {
                  display : true,
                  text : 'Weight (kg)',
                  font : {
                      weight : 'bold',
                      size : 16
                  }
              },
              ticks: {
                  font: {
                      weight : 'bold'
                  }
              }
          }
      }
  }}
    />;
  }

  export default WeightLineChart
  