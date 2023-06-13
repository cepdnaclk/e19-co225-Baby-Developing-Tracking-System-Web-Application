import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import AuthService from "./services/auth.service";
import "./Login.css"
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Login = (props) => {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const [privatePosts, setPrivatePosts] = useState([]);

  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios
  //       .post("http://localhost:8080/api/v1/auth/authenticate", {
  //         username: name,
  //         password: password,
  //       })
  //       .then((Response) => {
  //         console.log("Logged In",Response);
  //         if (Response.data.token) {
  //           localStorage.setItem("user", JSON.stringify(Response.data));
  //         }
  //         return Response.data;
  //       });
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        (response) => {
          console.log("Logged In", response);
          navigate("/home");
          //window.location.reload();
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
    <div className="login-full">
      <Nav />
      <div className="auth-form-cantainer">
        <h2>
          <b>Login</b>
        </h2>
        <h3>Enter your credentials</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(input) => setName(input.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required="required"
          />
          <input
            value={password}
            onChange={(input) => setPassword(input.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required="required"
          />
          <button type="submit">
            <b>LOGIN</b>
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
      <Footer />
    </div>
  );
};
