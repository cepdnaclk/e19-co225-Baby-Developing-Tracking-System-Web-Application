import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/adminParent";

// Registers a user by making a POST request to the API
export const AddParent = (firstname, lastname, email, password, role,is_mother_father_guardian) => {
  return axios
    .post(API_URL + "/saveParent", {
      firstname,
      lastname,
      email,
      password,
      role,
      is_mother_father_guardian
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

const parent_service = {
    AddParent
  };
  
  export default parent_service;