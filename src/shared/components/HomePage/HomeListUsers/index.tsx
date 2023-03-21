import { Box, Button, Grid, Tabs, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Tab from "@mui/material/Tab";
import { colors } from "../../../../theme/theme";
import ShortUserCard from "./components/ShortUserCard";
import { getUsers } from "../../../../utilities/mockupData/getUsers";

const HomeListUsers = () => {
  const matches = useMediaQuery("(max-width:599px)");
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabs = <Grid
  item
    container
    sx={{ justifyContent: { sm: "center" }, width: "auto" }}
  >
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="tabs"
      sx={{
        backgroundColor: colors.lightDark,
        borderRadius: "0.625rem",
        padding: "0.25rem",
      }}
    >
      <Tab label="1 Day" value="1" sx={{ padding: "0.5rem 0.625rem" }} />
      <Tab label="7 Days" value="2" sx={{ padding: "0.5rem 0.625rem" }} />
      <Tab
        label="30 Days"
        value="3"
        sx={{ padding: "0.5rem 0.625rem" }}
      />
    </Tabs>
  </Grid>
  return (
    <Box sx={{ marginBottom: { xs: "3rem", smd: "4.5rem" } }}>
      <Grid container
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid item>
        <Typography variant="h2">Top Gamers</Typography>
        </Grid>
        {!matches && tabs}
        <Grid item>
        <Button
          component={NavLink}
          to="/list-users"
          sx={{ fontSize: "0.875rem" }}
          endIcon={<ArrowForwardIosIcon />}
        >
          See all{" "}
        </Button>
        </Grid>
      </Grid>
      <Box mt={'1rem'}>
      {matches && tabs}
      </Box>
      <Grid container spacing={4} sx={{ padding: "2rem 0" }}>
        {getUsers(null).users.map((user, index) => (
          <Grid item key={user.id} xs={12} md={6}>
            <ShortUserCard userData={user} index={index + 1} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeListUsers;
