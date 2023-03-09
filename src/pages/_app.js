import { AuthProvider } from "@/context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#43a047",
    },
    secondary: {
      main: "#66bb6a",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily
  }
});

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
        <ToastContainer />
        <NextNProgress color={customTheme.palette.primary.main}/>
      </ThemeProvider>
    </AuthProvider>
  );
}
