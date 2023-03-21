import { useState } from "react";
import { Typography, Grid } from "@mui/material";

import InputPassword from "../ui/InputPassword";
import InputEmail from "../ui/InputEmail";
import ButtonSignUp from "./components/ButtonSignUp";
import InputPassConfirm from "../ui/InputPassConfirm";
import CheckboxConfirmSignUp from "./components/CheckboxConfirmSignUp";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [isErrorEmail, setErrorEmail] = useState(false);
  const [isErrorPass, setErrorPass] = useState(false);
  const [isErrorPassConfirm, setErrorPassConfirm] = useState(false);

  return (
    <Grid
      container
      item
      lg={6}
      justifyContent={"center"}
      alignContent={"center"}
      direction={"column"}
      alignItems={{ lg: "center" }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{ margin: "0 auto 1rem", maxWidth: "420px", width: "100%" }}
      >
        Sign up
      </Typography>
      <Grid
        component="form"
        container
        direction={"column"}
        alignContent={"center"}
        sx={{
          "& .MuiTextField-root": {
            maxWidth: "458px",
            marginTop: "2rem",
            width: "100%",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <InputEmail
          isErrorEmail={isErrorEmail}
          setEmail={setEmail}
          setErrorEmail={setErrorEmail}
        />
        <InputPassword
          setPassword={setPassword}
          setErrorPass={setErrorPass}
          isErrorPass={isErrorPass}
        />
        <InputPassConfirm
          setErrorPassConfirm={setErrorPassConfirm}
          isErrorPassConfirm={isErrorPassConfirm}
          password={password}
        />
        <CheckboxConfirmSignUp checked={checked} setChecked={setChecked} />
        <ButtonSignUp
          isErrorEmail={isErrorEmail}
          isErrorPass={isErrorPass}
          isErrorPassConfirm={isErrorPassConfirm}
          checked={checked}
          password={password}
          email={email}
        />
      </Grid>
    </Grid>
  );
};

export default Registration;
