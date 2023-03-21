import { Avatar, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { colors } from "../../../../theme/theme";
import { getUsersAvatar } from "../../../../utilities/mockupData/getUsers";

const HomeJoinUs = () => {
  const { user } = useAuth();
  return (
    <Stack alignItems={"center"} mb={"4rem"}>
      <Typography variant="h2" mb={"1.5rem"}>
        Sona is for everyone
      </Typography>
      <Typography
        variant="h4"
        mb={"3rem"}
        color={colors.lightWhite2}
        maxWidth={"500px"}
        textAlign={"center"}
      >
        Join the millions of gamers, collectors, and curators who are on this
        journey with you.
      </Typography>
      <Grid container spacing={4} justifyContent={"center"}>
        {getUsersAvatar(null).users.map((user, index) => (
          <Grid
            key={user.id}
            xs={3}
            xsOffset={(index - 4) % 7 === 0 ? 0.11 : 0}
            md={2}
            mdOffset={(index - 6) % 11 === 0 ? 0.11 : 0}
            lg={1.7}
            lgOffset={(index - 7) % 13 === 0 ? 0.11 : 0}
          >
            <Avatar
              src={user?.avatar}
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: "7.5rem",
                maxHeight: "7.5rem",
                color: colors.lightWhite2,
                margin: "0 auto",
              }}
            >
              User
            </Avatar>
          </Grid>
        ))}
      </Grid>
      <Button variant={"outlined"} component={NavLink} to={user ? "/marketplace" : "/welcome-sona"} sx={{ width: 170, margin: '2.5rem 0' }}>
        Get started
      </Button>
    </Stack>
  );
};

export default HomeJoinUs;
