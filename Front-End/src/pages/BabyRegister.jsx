import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/parent";

export const BabyRegister = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;
      console.log(access);
      console.log({
        firstName,
        lastName,
        birthday,
        gender,
      });
      axios
        .post(
          API_URL + "/registerBaby",
          {
            firstName,
            lastName,
            birthday,
            gender,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        )
        .then((response) => {
          console.log(response);
          navigate("/parent");
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <dev className="Register-full">
      <Nav />
      <div className="auth-form-cantainer">
        <h2>
          <b>Baby Details</b>
        </h2>
        <h3>Please fill in this form with your baby details</h3>
        <form className="register-form" onSubmit={handleSubmit}>
          <dev className="Fname">
            <input
              value={firstName}
              onChange={(input) => setFirstName(input.target.value)}
              type="name"
              placeholder="First Name"
              id="firstname"
              name="firstname"
            />
            <input
              value={lastName}
              onChange={(input) => setLastName(input.target.value)}
              type="name"
              placeholder="Last Name"
              id="lastname"
              name="lastname"
            />
          </dev>
          {/* <input
            value={name}
            onChange={(input) => setName(input.target.value)}
            type="name"
            placeholder="Username"
            id="name"
            name="name"
          /> */}
          <dev className="Fname">
            <label htmlFor="birthday">Birthday: </label>
            <input
              value={birthday}
              onChange={(input) => setBirthday(input.target.value)}
              type="date"
              placeholder="Birthday"
              id="birthday"
              name="birthday"
            />
          </dev>
          <input
            value={gender}
            onChange={(input) => setGender(input.target.value)}
            type="gender"
            placeholder="Gender"
            id="gender"
            name="gender"
          />

          <button type="submit">
            <b>Register Baby</b>
          </button>
        </form>
      </div>
      <Footer />
    </dev>
  );
};
