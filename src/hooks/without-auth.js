import { useEffect } from "react";
import Router from "next/router";
import ls from "localstorage-slim";

export default function withoutAuth(path="/home") {
  const token = ls.get("utn.token");
  useEffect(() => {
    if (token) {
      Router.push(path);
    }
  }, []);
}