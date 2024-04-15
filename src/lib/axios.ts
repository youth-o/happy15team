import axios from "axios";

const instance = axios.create({
  baseURL: "https://sp-taskify-api.vercel.app/4-15/",
  withCredentials: true,
});

export default instance;
