import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import MidwifeDashboard from "./MidwifeDashboard";

import { Home } from "./Home";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(parent);
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
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
        </Routes>
    </div>
  );
}

export default App;
