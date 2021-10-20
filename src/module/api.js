import axios from "axios";
import eventBus from "./eventBus";

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(null, (error) => {
  switch (error.response.status) {
    case 401:
      eventBus.emit("error", { message: "error.login" });
      break;
    case 404:
      eventBus.emit("error", { message: "error.notfound" });
      break;
  }
  return Promise.reject(error);
});

export default api;
