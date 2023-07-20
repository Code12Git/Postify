import axios from "axios";

// Assuming BASE_URL is defined correctly in your environment variables
const BASE_URL = process.env.REACT_APP_SERVER_URL;

// Retrieve the user object from localStorage
const accessToken = localStorage.getItem("access_token");

console.log(accessToken);

// Create an axios instance for public requests (without Authorization header)
const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// Create an axios instance for user requests (with Authorization header)
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${accessToken}` },
});

// Export the publicRequest instance by default
export default publicRequest;
