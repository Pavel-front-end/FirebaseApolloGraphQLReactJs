import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../../../context/AuthContext";
import { colors } from "../../../../../theme/theme";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const TitleContainer = () => {
    const { user } = useAuth();
  return (
    <Grid item xs={12} md={6}>
      <Box maxWidth={"25rem"} mb={"2rem"}>
        <Typography variant="h1" mb={"2rem"}>
          A magical NFT, powered by your mind
        </Typography>
        <Typography variant="h4" component={"h2"} color={colors.lightWhite2}>
          Your Sona is the beating heart of a Web3 cognitive identity platform
          driven by play.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item width={'170px'}>
          <Button
            component={NavLink}
            variant={"contained"}
            to="/marketplace"
            sx={{width: '100%'}}
          >
            Explore
          </Button>
        </Grid>
        <Grid item width={'170px'}>
          <Button
            component={NavLink}
            variant={"outlined"}
            to={user ? "/dashboard" : "/welcome-sona"}
            sx={{width: '100%'}}
          >
            Dashboard
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{margin: {xs: '2rem 0 1.5rem', md: '7.38rem 0 3.75rem'}, maxWidth: '400px'}} />
      <Box mb={{xs: '1.5rem', md: '6rem'}}>
      <Button
            component={"a"}
            href="https://www.sonaprotocol.xyz/"
            target={"_blank"}
            sx={{fontSize: '1.25rem'}}
            startIcon={<PlayCircleIcon sx={{width: '40px', height: '40px'}} />}
          >
            Learn more about Sona
          </Button>
      </Box>
    </Grid>
  );
};

export default TitleContainer;
