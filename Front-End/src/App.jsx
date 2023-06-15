import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import MidwifeDashboard from "./MidwifeDashboard";
import DoctorDashboard from "./DoctorDashboard";

import { Home } from "./Home";
import ParentDashboard from "./ParentDashboard";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user.role);
      console.log(user.role);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Midwife" element={<MidwifeDashboard />} />
          <Route path="/authenticate" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Doctor" element={<DoctorDashboard />} />
          <Route path="/Parent" element={<ParentDashboard />} />
        </Routes>
    </div>
  );
}

export default App;
