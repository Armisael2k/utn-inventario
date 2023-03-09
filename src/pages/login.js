import AuthContext from "@/context/AuthContext";
import withoutAuth from "@/hooks/without-auth";
import Image from "next/image";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Person, Lock } from "@mui/icons-material";
import Logo from "@/assets/logo.png";
import sleep from "@/utils/sleep";
import BackgroundParticles from "@/components/BackgroundParticles";
import {
  TextField,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";

const signInFormSchema = yup.object().shape({
  username: 
    yup.string().trim()
    .required("Obligatorio")
    .matches(/^[A-Za-z0-9]*$/, "Solo puede contener letras y números"),
  password:
    yup.string().trim()
    .required("Obligatorio")
    .min(6, "Debe tener mínimo 6 caracteres")
});

export default function Login() {
  withoutAuth();

  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn = async (data, e) => {
    await sleep(500);
    await signIn(data.username, data.password);
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "url('/assets/background.png') center center / cover no-repeat rgb(18, 18, 20)"
      }}
    >
      <BackgroundParticles/>
      <Box
        component="form"
        action=""
        onSubmit={handleSubmit(handleSignIn)}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          background: "#FFF",
          boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          paddingX: "40px",
          paddingY: "30px",
          zIndex: 1
        }}
      >
        <Image
          src={Logo}
          height={135}
          alt="Logo"
          priority={true}
          placeholder="blur"
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            marginTop: 1
          }}
        >
          Acceso
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            marginBottom: 5,
          }}
        >
          Ingresa los datos de tu cuenta.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            variant="outlined"
            label={errors.username?.message || "Usuario"}
            placeholder="Usuario"
            {...register("username")}
            focused={watch("username") ? true : false}
            error={errors.username ? true : false}
            defaultValue="jesus"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person/>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            label={errors.password?.message || "Contraseña"}
            placeholder="Contraseña"
            {...register("password")}
            focused={watch("password") ? true : false}
            type="password"
            defaultValue="123456"
            error={errors.password ? true : false}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock/>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <LoadingButton
          variant="contained"
          type="submit"
          size="large"
          loading={isSubmitting}
          sx={{
            width: "100%",
            marginTop: 5
          }}
        >
          Ingresar
        </LoadingButton>
      </Box>
    </Box>
  )
}