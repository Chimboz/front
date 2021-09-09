import axios from "axios";
import router from "@/router";

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(null, (error) => {
  let path = { name: "Error", params: { message: "error.unknown" } };
  switch (error.response.status) {
    case 401:
      path = "/login";
      break;
    case 404:
      path.params.message = "error.notfound";
      break;
  }
  router.push(path);
  return Promise.reject(error);
});

export default api;
