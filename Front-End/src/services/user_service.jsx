import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/admin/user";

// Registers a user by making a POST request to the API
export const createUser = (firstname, lastname, email, password, role) => {
  const token = JSON.parse(localStorage.getItem("user"));
  const access = token.access_token;
  return axios
    .post(
      API_URL + "/saveUser",
      {
        firstname,
        lastname,
        email,
        password,
        role,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          Authorization: "Bearer " + access,
        },
      }
    )
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
  createUser,
};

export default user_service;
