import axios from "axios";
import ls from "localstorage-slim";
import { signOut } from "@/context/AuthContext";

export function setupApiClient() {
  const api = axios.create({
    baseURL: "http://localhost:3000/api/",
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      if (error.response?.status === 401) {
        return signOut();
      }

      return Promise.reject(error);
    }
  );

  api.interceptors.request.use(async (config) => {
    const token = ls.get("utn.token", { decrypt: true });
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  });

  return api;
}