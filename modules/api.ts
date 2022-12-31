// API module for all request of the app
import axios from "axios";
import eventBus from "./eventBus";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL, // Force base URL
  // Force JSON format
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Emit errors for Modal to show when request fails
api.interceptors.response.use(null, (error) => {
  switch (error.response.status) {
    case 401: // 401 Unauthorized Error
      eventBus.emit("error", "error.login");
      break;
    case 404: // 404 Not Found
      eventBus.emit("error", "error.notfound");
      break;
    default:
  }
  return Promise.reject(error);
});

export default api;
