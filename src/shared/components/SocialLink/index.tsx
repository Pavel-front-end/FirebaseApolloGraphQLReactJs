import { Grid, Link } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { DiscordIcon } from "../ui/icons/Discord";

const SocialLink = () => {
  return (
    <Grid container justifyContent={{xs: 'center', md:'flex-end'}} sx={{ marginTop: {xs: '2rem', md: "7rem"} }}>
      <Link href="https://twitter.com/sonaprotocol" color="inherit" margin={'1rem'} >
        <TwitterIcon />
      </Link>
      <Link href="https://t.me/SONAprotocol" color="inherit" margin={'1rem'}>
        <TelegramIcon />
      </Link>
      <Link href="https://discord.gg/4vcpSj5btX" color="inherit" margin={'1rem'}>
        <DiscordIcon />
      </Link>
    </Grid>
  );
};

export default SocialLink;
