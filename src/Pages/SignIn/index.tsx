import { Container, Grid } from "@mui/material";
import LogIn from "../../shared/components/LogIn";
import ImgSignUp from "../../shared/features/ImgSignUp";

const SignIn = () => {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction={{ xs: "column-reverse", lg: "row" }}
      >
        <LogIn />
        <ImgSignUp
          text="Login with email and password"
          subText="Manage your achievements in your personal account"
        />
      </Grid>
    </Container>
  );
};

export default SignIn;
