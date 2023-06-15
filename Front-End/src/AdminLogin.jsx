import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Modal from "react-modal";
import "./AdminLogin.css";

export const AdminLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "root" && password === "password") {
      navigate("/admin");
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="add-admin-container">
      <Nav />
      <div className="add-admin-form-container">
        <h1 className="h1">Admin Login</h1>
        <form className="add-admin-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Access Denied"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="modal-heading">Access Denied</h2>
        <p className="modal-message">Invalid credentials. Please try again.</p>
        <button className="modal-button" onClick={closeModal}>
          OK
        </button>
      </Modal>
    </div>
  );
};
