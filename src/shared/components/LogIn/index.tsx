import { useState } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import SocialLogIn from "../SocialLogIn";
import { colors } from "../../../theme/theme";
import { NavLink } from "react-router-dom";
import InputPassword from "../ui/InputPassword";
import InputEmail from "../ui/InputEmail";
import ButtonLogIn from "./components/ButtonLogIn";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorEmail, setErrorEmail] = useState(false);
  const [isErrorPass, setErrorPass] = useState(false);

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
        Log in
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
        <ButtonLogIn
          isErrorEmail={isErrorEmail}
          isErrorPass={isErrorPass}
          password={password}
          email={email}
        />
      </Grid>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          maxWidth: "calc(458px - 2rem)",
          width: "100%",
          justifyContent: "center",
          padding: "0 2rem",
          margin: "0 auto 2.5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "1px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            position: "absolute",
          }}
        ></Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "700",
            padding: "0 1rem",
            background: colors.dark,
            position: "relative",
          }}
        >
          or continue with
        </Typography>
      </Box>
      <SocialLogIn />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2.5rem",
        }}
      >
        <Typography variant="body2">Don’t have an account yet?</Typography>
        <Button
          variant="text"
          component={NavLink}
          to="/sign-up"
          sx={{
            color: colors.purple,
            fontSize: "0.875rem",
            padding: "0 0.5rem",
            ":hover": {
              color: colors.purple,
            },
          }}
        >
          Tap here to Sign Up
        </Button>
      </Box>
    </Grid>
  );
};

export default LogIn;
