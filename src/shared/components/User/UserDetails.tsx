import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../theme/theme";
import {
  getUserDescription,
  getUserSkills,
} from "../../../utilities/mockupData/getUserByAuthId";
import Companionship from "../Companionship";
import UserWalletBalance from "./UserWalletBalance";

interface Props {
  name: string | undefined;
  description: string | undefined;
  skills: string[] | undefined;
  accountAddress: string | undefined
  followers: string | undefined
  following: string | undefined
}

const UserDetails = ({ name, description, skills, accountAddress, followers, following }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction={{ xs: "column", md: "row" }}
      sx={{ margin: "2.5rem 0" }}
    >
      <Grid container item md={6} position={"relative"} direction={"column"}>
        <Avatar
          sx={{
            width: "5.625rem",
            height: "5.625rem",
            position: "absolute",
            marginTop: "-6.875rem",
            marginLeft: "-0.5rem",
            color: colors.lightWhite2,
          }}
        >
          User
        </Avatar>
        <Typography variant="h3">{name}</Typography>
        <Box sx={{ margin: "1.5rem 0" }}>
          <Typography variant="body2" color={colors.lightWhite2}>
            {getUserDescription(description)}
          </Typography>
          <Typography variant="body2" color={colors.lightWhite2}>
            {getUserSkills(skills)?.map((skill) => {
              return " ✹ " + skill;
            })}
          </Typography>
        </Box>
        <Companionship />
      </Grid>
      <Grid container item md={6} justifyContent={{md: 'flex-end'}}>
        <UserWalletBalance accountAddress={accountAddress} followers={followers} following={following} />
      </Grid>
    </Grid>
  );
};

export default UserDetails;
