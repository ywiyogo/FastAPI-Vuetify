import axios from "axios";

const getAPI = axios.create({
  baseURL: `http://120.0.0.1:8000`,
  timeout: 1000,
  accept: "application/json"
});

export { getAPI };
