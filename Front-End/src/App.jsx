import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import "./App.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import MidwifeDashboard from "./pages/MidwifeDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import { Home } from "./pages/Home";
import ParentDashboard from "./pages/ParentDashboard";
import { BabyRegister } from "./pages/BabyRegister";
import { AdminHome } from "./Admin/AdminHome";
import { AddUser } from "./Admin/AddUser";
import { AddDoctor } from "./Admin/AddDoctor";
import { AddParent } from "./Admin/AddParent";
import { DisplayDetails } from "./Admin/DisplayDetails";
import { AdminLogin } from "./Admin/AdminLogin";

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
        <Route path="/BabyRegister" element={<BabyRegister />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addparent" element={<AddParent />} />
        <Route path="/adddoctor" element={<AddDoctor />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/display" element={<DisplayDetails />} />
      </Routes>
    </div>
  );
}

export default App;
