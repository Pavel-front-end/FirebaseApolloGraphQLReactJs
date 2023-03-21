import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { validatorPassword } from "../../../../utilities";

interface Props {
  isErrorPass: boolean;
  setPassword: (value: string) => void;
  setErrorPass: (value: boolean) => void;
}

const InputPassword = ({ isErrorPass, setPassword, setErrorPass }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const isValidPass = (valueInput: string) => {
    if (validatorPassword.test(valueInput)) {
      setErrorPass(false);
    } else {
      setErrorPass(true);
    }
  };
  return (
    <TextField
      error={isErrorPass}
      type={showPassword ? "text" : "password"}
      variant="outlined"
      inputProps={{ "data-testid": "password" }}
      label="password *"
      onChange={(e) => setPassword(e.target.value)}
      onBlur={(e) => isValidPass(e.target.value)}
      InputProps={{
        endAdornment: (
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      }}
      helperText={
        isErrorPass
          ? "Min 8 characters , upper and lowercase letters, numbers."
          : ""
      }
    />
  );
};

export default InputPassword;
