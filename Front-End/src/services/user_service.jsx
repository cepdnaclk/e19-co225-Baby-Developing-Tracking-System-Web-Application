import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/adminUser";

// Registers a user by making a POST request to the API
export const signup = (firstname, lastname, email, password, role) => {
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

// Deletes a user by making a DELETE request to the API
export const deleteUser = (userId) => {
  return axios
    .delete(API_URL + `/${userId}`)
    .then((response) => {
      console.log(response);
      return response.data;
    });
};


