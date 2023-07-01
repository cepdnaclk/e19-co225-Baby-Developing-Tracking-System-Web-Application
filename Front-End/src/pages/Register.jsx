import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [hospital, setHospital] = useState("");
  const [regNo, setRegNo] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [isMotherFatherGuardian, setIsMotherFatherGuardian] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    try {
      await AuthService.signup(
        firstname,
        lastname,
        email,
        password,
        role,
        hospital,
        regNo,
        specialization,
        isMotherFatherGuardian
      ).then(
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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (e.target.value !== password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
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
                <input
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                {passwordError && (
                  <p className="error-message">{passwordError}</p>
                )}
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
                {role === "PARENT" && (
                  <div className="radio-group-role">
                    <div className="radio-group-item">
                      <label htmlFor="Mother">Mother</label>
                      <input
                        type="radio"
                        id="Parent"
                        name="isMotherFatherGuardian"
                        value="MOTHER"
                        checked={isMotherFatherGuardian === "MOTHER"}
                        onChange={(e) =>
                          setIsMotherFatherGuardian(e.target.value)
                        }
                      />
                    </div>
                    <div className="radio-group-item">
                      <label htmlFor="Father">Father</label>
                      <input
                        type="radio"
                        id="Father"
                        name="isMotherFatherGuardian"
                        value="FATHER"
                        checked={isMotherFatherGuardian === "FATHER"}
                        onChange={(e) =>
                          setIsMotherFatherGuardian(e.target.value)
                        }
                      />
                    </div>

                    <div className="radio-group-item">
                      <label htmlFor="Guardian">Guardian</label>
                      <input
                        type="radio"
                        id="Guardian"
                        name="isMotherFatherGuardian"
                        value="GUARDIAN"
                        checked={isMotherFatherGuardian === "GUARDIAN"}
                        onChange={(e) =>
                          setIsMotherFatherGuardian(e.target.value)
                        }
                      />
                    </div>
                  </div>
                )}
                {(role === "DOCTOR" || role === "MIDWIFE") && (
                  <input
                    value={hospital}
                    onChange={(e) => setHospital(e.target.value)}
                    type="hospital"
                    placeholder="Hospital"
                    id="hospital"
                    name="hospital"
                  />
                )}
                {(role === "DOCTOR" || role === "MIDWIFE") && (
                  <input
                    value={regNo}
                    onChange={(e) => setRegNo(e.target.value)}
                    type="regNo"
                    placeholder="Registration Number"
                    id="regNo"
                    name="regNo"
                  />
                )}
                {role === "DOCTOR" && (
                  <input
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    type="specialization"
                    placeholder="Specialization"
                    id="specialization"
                    name="specialization"
                  />
                )}
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
