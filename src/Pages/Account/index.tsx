import React, { FC } from "react";
import { Container } from "@mui/material";

import Profile from "../../shared/components/Profile";

const Account: FC = () => {
  return (
    <>
      <Container sx={{ marginTop: "0rem" }} maxWidth={"xl"}>
        <Profile />
      </Container>
    </>
  );
};

export default Account;
