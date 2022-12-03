// API module for all request of the app

import axios from "axios";
import eventBus from "./eventBus";

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // Force base URL
  // Force JSON format
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

// Emit errors for Modal to show when request fails
api.interceptors.response.use(null, (error) => {
  switch (error.response.status) {
    case 401: // 401 Unauthorized Error
      eventBus.emit("error", { message: "error.login" });
      break;
    case 404: // 404 Not Found
      eventBus.emit("error", { message: "error.notfound" });
      break;
  }
  return Promise.reject(error);
});

export default api;
