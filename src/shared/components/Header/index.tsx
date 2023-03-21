import { useAuth } from "../../../context/AuthContext";
import { useStyles } from "./styles";
import { Box, Button, useMediaQuery } from "@mui/material";
import ChangeLanguage from "../ChangeLanguage";
import NavLinks from "../NavLinks";
import { NavLink } from "react-router-dom";
import { SonaLogo } from "../ui/icons/SonaLogo";
import SignInBtn from "../SignInBtn";
import UserMenu from "../UserMenu";
import Search from "../Search";
import PopupWishList from "../Popup/PopupWishList";

export default function Header() {
  const { user } = useAuth();
  const matches = useMediaQuery("(min-width:1200px)");

  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <Box className={classes.dFlex}>
        <Button component={NavLink} className={classes.logo} to="/">
          <SonaLogo />
        </Button>
        {matches && <NavLinks user={user} />}
      </Box>
      <Box className={classes.dFlex}>
        {matches && (
          <>
            <Search />
            <ChangeLanguage />
            <SignInBtn />
          </>
        )}
        <PopupWishList />
        <UserMenu />
      </Box>
    </header>
  );
}
