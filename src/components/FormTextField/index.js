import { forwardRef } from "react";
import {
  TextField,
  InputAdornment
} from "@mui/material";

function FormTextField({ hook, fieldName, label, shrink, maxLength, startAdornment, endAdornment, ...props }, ref) {
  return (
    <TextField
      ref={ref}
      {...hook.register(fieldName)}
      label={hook.errors?.[fieldName]?.message || label}
      focused={hook.watch(fieldName) ? true : false}
      error={hook.errors?.[fieldName] ? true : false}
      variant="outlined"
      InputLabelProps={{ shrink: shrink === false ? undefined : true }}
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">
            { startAdornment }
          </InputAdornment>
        ) : null,
        endAdornment: endAdornment ? (
          <InputAdornment position="start">
            { endAdornment }
          </InputAdornment>
        ) : null,
      }}
      inputProps={{
        maxLength: maxLength || 255
      }}
      {...props}
    />
  );
}

export default forwardRef(FormTextField);