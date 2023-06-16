import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/adminUser";

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

