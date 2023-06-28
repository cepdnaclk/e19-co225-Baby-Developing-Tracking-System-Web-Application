import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/admin/doctor";

// Registers a user by making a POST request to the API
export const AddDoctor = async (firstname, lastName, email, password, role,hospital,regNo,specialization) => {
  console.log(firstname);
  const token = JSON.parse(localStorage.getItem("user"));
  const access = token.access_token;
  console.log(access);
  const response = await axios
    .post(API_URL + "/saveDoctor", {
      firstname,
      lastName,
      email,
      password,
      role,
      hospital,
      regNo,
      specialization
    },{
      headers: {
        "Access-Control-Allow-Origin": true,
        Authorization: "Bearer " + access,
      },});
  console.log(response.data);

  return response.data;
};

const doctor_service = {
    AddDoctor
  };
  
  export default doctor_service;
