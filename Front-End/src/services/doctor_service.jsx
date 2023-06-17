import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/adminDoctor";

// Registers a user by making a POST request to the API
export const AddDoctor = (firstname, lastname, email, password, role,hospital,regNo,specialization) => {
  return axios
    .post(API_URL + "/saveDoctor", {
      firstname,
      lastname,
      email,
      password,
      role,
      hospital,
      regNo,
      specialization
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

const doctor_service = {
    AddDoctor
  };
  
  export default doctor_service;
