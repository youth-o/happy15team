import axios from "axios";
import { AxiosInstance } from "../../node_modules/axios/index";

const instance = axios.create({
  baseURL: "https://sp-taskify-api.vercel.app/4-15",
});

export default instance;
