import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

// Registers a user by making a POST request to the API
const signup = (firstname, lastname, email, password,role) => {
  return axios
    .post(API_URL + "/register", {
      firstname,
      lastname,
      email,
      password,
      role
    })
    .then((response) => {
      console.log(response);
      if (response.data.access_token) {
        // Stores the user object in local storage if a token is present in the response
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

// Authenticates a user by making a POST request to the API
const login = (email, password) => {
  return axios
    .post(API_URL + "/authenticate", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.access_token) {
        // Stores the user object in local storage if a token is present in the response
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

// Removes the user object from local storage
const logout = () => {
  localStorage.removeItem("user");
};

// Retrieves the current user object from local storage
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
