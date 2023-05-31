import axios from "axios";
import { authHeader } from "./auth_header";

const API_URL = "http://10.30.118.183:8080/api/v1";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/public");
};

const getAllPrivatePosts = () => {
  return axios.get(API_URL + "/demo-controller", { headers: authHeader() });
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

console.log(getAllPrivatePosts)

export default postService;  
