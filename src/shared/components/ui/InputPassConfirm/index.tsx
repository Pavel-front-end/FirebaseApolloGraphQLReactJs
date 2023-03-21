import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  password: string;
  isErrorPassConfirm: boolean;
  setErrorPassConfirm: (value: boolean) => void;
}

const InputPassConfirm = ({
  password,
  setErrorPassConfirm,
  isErrorPassConfirm,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passConfirm, setPassConfirm] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const isValidPassConfirm = (valueInput: string) => {
    password === valueInput
      ? setErrorPassConfirm(false)
      : setErrorPassConfirm(true);
  };
  useEffect(() => {
    if (passConfirm.length > 7) {
      password === passConfirm
        ? setErrorPassConfirm(false)
        : setErrorPassConfirm(true);
    }
  });

  return (
    <TextField
      error={isErrorPassConfirm}
      type={showPassword ? "text" : "password"}
      variant="outlined"
      inputProps={{ "data-testid": "confirm-password" }}
      label={"confirm password *"}
      onChange={(e) => setPassConfirm(e.target.value)}
      onBlur={(e) => isValidPassConfirm(e.target.value)}
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
      helperText={isErrorPassConfirm ? "Passwords do not match" : ""}
    />
  );
};

export default InputPassConfirm;
