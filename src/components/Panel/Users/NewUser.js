import { useState } from "react";
import FlexBox from "@/components/FlexBox";
import Modal from "@/components/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FormTextField from "@/components/FormTextField";
import {
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";

const formSchema = yup.object().shape({
  name: 
    yup.string().trim()
    .required("Obligatorio")
    .matches(/^([ \u00c0-\u01ffa-zA-Z'\-])+$/, "Contiene caracteres invalidos"),
  username: 
    yup.string().trim()
    .required("Obligatorio")
    .matches(/^[A-Za-z0-9]*$/, "Solo puede contener letras y números"),
  password:
    yup.string().trim()
    .required("Obligatorio")
    .min(6, "Debe tener mínimo 6 caracteres"),
  passwordConfirmation:
    yup.string().trim()
    .required("Obligatorio")
    .oneOf([yup.ref('password')], "Las contraseñas no coinciden")
});

function NewUser({ open, onClose }) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const handleNewUser = async (data, e) => {
    console.log("aca");
  }

  return(
    <Modal
      open={open}
      onClose={onClose}
      title="Nuevo usuario"
      maxWidth="sm"
      actions={
        <Button form="new-user" type="submit">Crear usuario</Button>
      }
    >
      <FlexBox
        id="new-user"
        as="form"
        action=""
        onSubmit={handleSubmit(handleNewUser)}
        direction="column"
        gap={2}
        sx={{
          paddingTop: 1,
          marginBottom: 1,
        }}
      >
        <Typography sx={{color: "#898989"}}>Información</Typography>
        <FlexBox
          gap={1}
        >
          <FormTextField
            hook={{register, watch, errors}}
            fieldName="name"
            label="Nombre"
            placeholder="Nombre"
            fullWidth
          />
          <FormTextField
            hook={{register, watch, errors}}
            fieldName="username"
            label="Usuario"
            placeholder="Usuario"
            fullWidth
          />
        </FlexBox>
        <FlexBox
          gap={1}
        >
          <FormTextField
            hook={{register, watch, errors}}
            fieldName="password"
            label="Contraseña"
            placeholder="Contraseña"
            fullWidth
          />
          <FormTextField
            hook={{register, watch, errors}}
            fieldName="passwordConfirmation"
            label="Confirmar contraseña"
            placeholder="Confirmar contraseña"
            fullWidth
          />
        </FlexBox>
        <FlexBox
          direction="column"
        >
          <Typography sx={{color: "#898989"}}>Permisos</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Permiso 1" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Permiso 2" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Permiso 3" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Permiso 4" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Permiso 5" />
          </FormGroup>
        </FlexBox>
      </FlexBox>
    </Modal>
  );
}

export default NewUser;