import { Container, Grid } from "@mui/material";
import React from "react";
import Registration from "../../shared/components/Registration";
import ImgSignUp from "../../shared/features/ImgSignUp";

const SignUp = () => {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction={{ xs: "column-reverse", lg: "row" }}
      >
        <Registration />
        <ImgSignUp
          text="Create your account in the world’s Sona Game"
          subText="Manage your achievements in your personal account"
        />
      </Grid>
    </Container>
  );
};

export default SignUp;
