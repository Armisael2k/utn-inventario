import axios from "axios";

export function setupApiClient() {
  const api = axios.create({
    baseURL: "http://localhost:3000/api/",
  });

  return api;
}