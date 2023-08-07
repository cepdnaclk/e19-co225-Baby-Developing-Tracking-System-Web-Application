import React, { useState, useEffect } from "react";
import { Footer } from "../Footer";
import { Header } from "./Header";
import { Bar } from "react-chartjs-2";
import "./AdminHome.css";

export const AdminHome = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "WHAT ADMIN CAN DO",
      description: `The admin panel provides authorized admin users with various actions and responsibilities related to managing users. As an admin, you have the following capabilities:

- Manage Users: You can add, update, and delete users with different roles, including doctors, parents, children, and midwives. This allows you to maintain an accurate and up-to-date user database.

- Add Doctor: By adding doctors to the system, you enable the inclusion of healthcare professionals who play a crucial role in providing medical care and advice to users.

- Add Parent: Parents, as caregivers or guardians of children, can be added to the system. This grants them access to relevant information and services related to their children's health and well-being.

- Add Children: Children, who are under the care of parents or guardians, can be added to the system. This ensures accurate records and enables specific functionalities tailored to their needs.

- Add Midwife: As and midwives, facilitating efficient healthcare services and support for all users.`,
    },
    { id: 2, title: "USER COUNT", description: "USER COUNT OF THE SYSTEM" },
    // Add more cards here if you want
  ]);

  // Simulated values for user, doctor, baby, and parent counts
  const [userCount, setUserCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);
  const [parentCount, setParentCount] = useState(0);

  // Simulated online status
  const [adminOnline, setAdminOnline] = useState(false);
  const [parentOnline, setParentOnline] = useState(false);
  const [doctorOnline, setDoctorOnline] = useState(false);
  const [midwifeOnline, setMidwifeOnline] = useState(false);

  useEffect(() => {
    // Simulated API call to fetch user, doctor, baby, and parent counts
    // Replace with actual API calls to get real-time data
    // Example:
    // fetchUserCount().then((count) => setUserCount(count));
    // fetchDoctorCount().then((count) => setDoctorCount(count));
    // fetchBabyCount().then((count) => setBabyCount(count));
    // fetchParentCount().then((count) => setParentCount(count));

    // Simulated API call to fetch online status
    // Replace with actual API calls to get real-time data
    // Example:
    // fetchAdminOnlineStatus().then((status) => setAdminOnline(status));
    // fetchParentOnlineStatus().then((status) => setParentOnline(status));
    // fetchDoctorOnlineStatus().then((status) => setDoctorOnline(status));
    // fetchMidwifeOnlineStatus().then((status) => setMidwifeOnline(status));

    // Simulated setTimeout to update counts and online status after 2 seconds
    const timeout = setTimeout(() => {
      setUserCount(10); // Example user count value
      setDoctorCount(2); // Example doctor count value
      setBabyCount(5); // Example baby count value
      setParentCount(5); // Example parent count value
      setAdminOnline(true); // Example admin online status
      setParentOnline(false); // Example parent online status
      setDoctorOnline(true); // Example doctor online status
      setMidwifeOnline(false); // Example midwife online status
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  // Update the second card's description with user, doctor, baby, and parent counts
  const updatedCards = cards.map((card) => {
    if (card.id === 2) {
      return {
        ...card,
        description: (
          <>
            USER COUNT OF THE SYSTEM
            <Bar
              data={{
                labels: ["User Count", "Doctor Count", "Baby Count", "Parent Count"],
                datasets: [
                  {
                    label: "Count",
                    data: [userCount, doctorCount, babyCount, parentCount],
                    backgroundColor: [
                      "rgba(75, 192, 192, 0.6)",
                      "rgba(153, 102, 255, 0.6)",
                      "rgba(255, 99, 132, 0.6)",
                      "rgba(54, 162, 235, 0.6)",
                    ],
                    borderColor: [
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: Math.max(userCount, doctorCount, babyCount, parentCount) + 10,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
            <div className="online-status">
              <p>Admin: {adminOnline ? "Online" : "Offline"}</p>
              <p>Parent: {parentOnline ? "Online" : "Offline"}</p>
              <p>Doctor: {doctorOnline ? "Online" : "Offline"}</p>
              <p>Midwife: {midwifeOnline ? "Online" : "Offline"}</p>
            </div>
          </>
        ),
      };
    }
    return card;
  });

  return (
    <div>
      <Header />

      <div className="card-container">
        {updatedCards.map((card) => (
          <div className="card" key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};
