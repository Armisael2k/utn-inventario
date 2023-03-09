import { createContext, useEffect, useState } from "react";
import ls from "localstorage-slim";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";
import Router from "next/router";

const AuthContext = createContext({});

export async function signOut() {
  ls.remove("utn.token");
  Router.replace("/login");
}

export const AuthProvider =  ({ children }) => {

  const [user, setUser] = useState(null);
  
  async function signIn(username, password) {
    try {
      const { data } = await api.post("/account/authenticate", {
        username,
        password,
      });

      console.log(data);
      ls.set("utn.token", data.token, { encrypt: true });
      toast.success("Datos correctos");
      Router.replace("/home");
    } catch (err) {
      switch (err?.response?.status) {
        case 404:
          return toast.error("Usuario no encontrado");
        default:
          return toast.error("La acción no pudo ser completada");
      }
    }
  }
    
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;