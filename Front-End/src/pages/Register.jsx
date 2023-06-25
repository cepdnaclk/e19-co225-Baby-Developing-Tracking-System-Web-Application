import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [hospital, setHospital] = useState("");
  const [regNo, setRegNo] = useState("");
  const [specialization, setSpecialization] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(firstname, lastname, email, password, role, hospital, regNo, specialization).then(
        (response) => {
          console.log("Account Created", response);
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      {/* <Nav /> */}
      <div className="Register-full animate-fadein rounded-lg">
        <div className="relative  rounded-lg ">
          <div className="auth-form-container">
            <div className="auth-logo">
              <img src="src\assets\Sproutopia_SignIn_logo.png"></img>
            </div>
            <div className="register-form-container">
              <h2>
                <b>Sign Up</b>
              </h2>
              <h3>Please fill in this form to create an account</h3>
              <form className="register-form" onSubmit={handleSubmit}>
                <div className="Fname">
                  <input
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="First Name"
                    id="firstname"
                    name="firstname"
                  />
                  <input
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                  />
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  name="email"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                />
                <div className="radio-group-role">
                  <div className="radio-group-item">
                    <label htmlFor="Parent">Parent</label>
                    <input
                      type="radio"
                      id="Parent"
                      name="role"
                      value="PARENT"
                      checked={role === "PARENT"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>
                  <div className="radio-group-item">
                    <label htmlFor="Doctor">Doctor</label>
                    <input
                      type="radio"
                      id="Doctor"
                      name="role"
                      value="DOCTOR"
                      checked={role === "DOCTOR"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>

                  <div className="radio-group-item">
                    <label htmlFor="Midwife">Midwife</label>
                    <input
                      type="radio"
                      id="Midwife"
                      name="role"
                      value="MIDWIFE"
                      checked={role === "MIDWIFE"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>
                </div>
                {(role === "DOCTOR") && <input
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  type="hospital"
                  placeholder="Hospital"
                  id="hospital"
                  name="hospital"
                />}
                {(role === "DOCTOR") && <input
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  type="regNo"
                  placeholder="Registration Number"
                  id="regNo"
                  name="regNo"
                />}
                {(role === "DOCTOR") && <input
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  type="specialization"
                  placeholder="Specialization"
                  id="specialization"
                  name="specialization"
                />}
                <button type="submit">
                  <b>SIGNUP</b>
                </button>
              </form>
              <button
                className="link-btn"
                onClick={() => navigate("/authenticate")}
              >
                Already have an account? Login here.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
