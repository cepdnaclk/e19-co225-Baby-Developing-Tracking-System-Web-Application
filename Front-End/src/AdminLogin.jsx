import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AdminLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "root" && password === "password") {
      navigate("/admin");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="add-doctor-container">
      <Header />
      <div className="add-doctor-form-container">
        <h1 className="h1">Admin Login</h1>
        <form className="add-doctor-form">
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
    </div>
  );
};
