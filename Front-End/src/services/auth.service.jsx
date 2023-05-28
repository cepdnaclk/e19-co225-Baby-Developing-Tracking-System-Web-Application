import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

const signup = (name, email, password) => {
  return axios
    .post(API_URL + "/signup", {
      name,
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (name, password) => {
  return axios
    .post(API_URL + "/authenticate", {
      name,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const auth = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default auth;