import axios from "axios";

export const createApiClient = () => {
  const config = {
    baseURL: "https://sfe-m3if.onrender.com/api/v1"
  };
  return axios.create(config);
};

export const getDashboardDetails = () => createApiClient().get("/dashboard");

export const getChatDetails = () => createApiClient().get("/chat_dashboard");
