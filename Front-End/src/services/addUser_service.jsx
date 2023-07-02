import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/admin/user";

// Registers a user by making a POST request to the API
export const AddUser = (
  firstname,
  lastName,
  email,
  password,
  role,

) => {
  return axios
    .post(API_URL + "/saveUser", {
      firstname,
      lastName,
      email,
      password,
      role,
    
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

const user_service = {
  AddUser,
};

export default user_service;
