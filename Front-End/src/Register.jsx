import React, { useState } from "react";
import AuthService from "./services/auth.service";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [role,setRole] = useState("USER");

  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   try {
  //     await axios.post("http://localhost:8080/api/v1/auth/register",
  //     {username: name,
  //     email: email,
  //     password: password}
  //     ).then((Response) => {
  //       console.log(Response);
  //       if (Response.token) {
  //         localStorage.setItem("user", JSON.stringify(Response.data));
  //       }
  //       return Response.data;
  //     });
  //   } catch(err){
  //     alert(err);
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(firstname, lastname, email, password,role).then(
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
    <dev className="Register-full">
      <Nav />
      <div className="auth-form-cantainer">
        <h2>
          <b>Sign Up</b>
        </h2>
        <h3>Please fill in this form to creat an account</h3>
        <form className="register-form" onSubmit={handleSubmit}>
          <dev className="Fname">
            <input
              value={firstname}
              onChange={(input) => setFirstName(input.target.value)}
              type="name"
              placeholder="First Name"
              id="firstname"
              name="firstname"
            />
            <input
              value={lastname}
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
          <input
            value={email}
            onChange={(input) => setEmail(input.target.value)}
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
          />
          <input
            value={password}
            onChange={(input) => setPassword(input.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <input
            value={role}
            onChange={(input) => setRole(input.target.value)}
            type="name"
            placeholder="role"
            id="role"
            name="role"
          />
          <button type="submit">
            <b>SIGNUP</b>
          </button>
        </form>
        <button className="link-btn" onClick={() => navigate("/authenticate")}>
          Already have an account? Login here.
        </button>
      </div>
      <Footer />
    </dev>
  );
};
