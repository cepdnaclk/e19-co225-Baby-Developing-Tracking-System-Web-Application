import axios from "axios";
import { authHeader } from "./auth_header";

const API_URL = "http://10.30.118.183:8080/api/v1";

// Retrieves all public posts by making a GET request to the API
const getAllPublicPosts = () => {
  return axios.get(API_URL + "/public");
};

// Retrieves all private posts by making a GET request to the API with the authorization header
const getAllPrivatePosts = () => {
  return axios.get(API_URL + "/demo-controller", { headers: authHeader() });
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

console.log(getAllPrivatePosts);

export default postService;
