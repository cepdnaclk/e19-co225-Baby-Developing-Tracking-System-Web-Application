import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/admin/user";

export const saveUser = (user) => {
  return axios.post(`${API_URL}/saveUser`, user)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const updateUser = (user) => {
  return axios.put(`${API_URL}/updateUser`, user)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const deleteUser = (email) => {
  return axios.delete(`${API_URL}/deleteUser/${email}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const getAllUsers = () => {
  return axios.get(`${API_URL}/getAllUser`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};


const user_service = {
  saveUser,
  updateUser,
  deleteUser,
  getAllUsers ,
};

export default user_service;

