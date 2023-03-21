import { TextField } from "@mui/material";
import React from "react";
import { validatorEmail } from "../../../../utilities";

interface Props {
  isErrorEmail: boolean;
  emailValue?: string | undefined;
  setEmail: (value: string) => void;
  setErrorEmail: (value: boolean) => void;
}

const InputEmail = ({
  isErrorEmail,
  setEmail,
  setErrorEmail,
  emailValue,
}: Props) => {
  const isValidEmail = (valueInput: string) => {
    if (validatorEmail.test(valueInput)) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  };
  return (
    <TextField
      error={isErrorEmail}
      type="email"
      variant="outlined"
      defaultValue={emailValue}
      inputProps={{ "data-testid": "email" }}
      label="email *"
      onChange={(e) => setEmail(e.target.value)}
      onBlur={(e) => isValidEmail(e.target.value)}
      helperText={isErrorEmail ? "Incorrect entry." : ""}
    />
  );
};

export default InputEmail;
