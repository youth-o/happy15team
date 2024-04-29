import axios from "axios";

const instance = axios.create({
  baseURL: "https://sp-taskify-api.vercel.app/4-15",
});

const getToken = () => {
  // 브라우저(윈도우객체)가 있을때만 실행
  if (typeof window !== undefined) {
    const token = window.localStorage.getItem("accessToken");
    return token;
  }
  return "";
};

instance.interceptors.request.use((config) => {
  const modifiedConfig = { ...config };
  modifiedConfig.headers.Authorization = `Bearer ${getToken()}`;
  return modifiedConfig;
});

export default instance;
