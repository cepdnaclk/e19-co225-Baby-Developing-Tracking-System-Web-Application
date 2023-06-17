import React, { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "./Header";
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

- Add Midwife: As an admin, you have the authority to add midwives to the system. Midwives are specialized healthcare professionals who assist with childbirth and provide prenatal and postnatal care to users requiring their services.

- Update and Delete User Accounts: You have the ability to modify and remove user accounts as necessary. This ensures that user information remains accurate and up-to-date, while removing accounts that are no longer relevant or required.

The admin panel empowers you to effectively manage doctors, parents, children, and midwives, facilitating efficient healthcare services and support for all users.`
  },
    { id: 2, title: "CARD 2", description: "Description for Card 2" },
    // Add more card Here if you want
  ]);

  return (
    <div>
      <Header />

      <div className="card-container">
        {cards.map((card) => (
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

