import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default publicRequest;
