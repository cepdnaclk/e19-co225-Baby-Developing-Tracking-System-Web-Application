import React, { useState } from "react";
import axios from "axios"

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      await axios.post("http://localhost:8080/api/v1/auth/register",
      {username: name,
      email: email,
      password: password}
      ).then((Response) => {
        console.log(Response);
        if (Response.token) {
          localStorage.setItem("user", JSON.stringify(Response.data));
        }
        return Response.data;
      });
    } catch(err){
      alert(err);
    }
  }

  return (
    <div className="auth-form-cantainer">
      <h2><b>Create Account</b></h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(input) => setName(input.target.value)}
          type="name"
          placeholder="Username"
          id="name"
          name="name"
        />
        <input
          value={email}
          onChange={(input) => setEmail(input.target.value)}
          type="email"
          placeholder="Email Address"
          id="email"
          name="email"
        />
        {/* <label htmlFor="password">password</label> */}
        <input
          value={password}
          onChange={(input) => setPassword(input.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button type="submit"><b>SIGNUP</b></button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};
