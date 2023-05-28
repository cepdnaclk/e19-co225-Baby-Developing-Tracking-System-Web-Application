import axios from "axios";
import { authHeader } from "./auth_header";

const API_URL = "http://localhost:8080/api/v1/posts";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/public");
};

const getAllPrivatePosts = () => {
  return axios.get(API_URL + "/private", { headers: authHeader() });
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

export default postService;  
