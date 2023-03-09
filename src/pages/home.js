import {
  Box,
} from "@mui/material";
import withAuth from "@/hooks/with-auth";
import { signOut } from "@/context/AuthContext";


export default function Home() {
  withAuth();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
      >
      <p onClick={signOut}>hola mundo</p>
    </Box>
  )
}

// import { api } from "@/services/apiClient";

// export async function getServerSideProps() {
//   console.log("SSR");
//   const { data } = await api.get("/account/verify");
//   console.log(data);
//   return { props: {  } }
// }