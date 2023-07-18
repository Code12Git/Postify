import axios from "axios";

const BASE_URL = "https://postify-z1gf.onrender.com/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
