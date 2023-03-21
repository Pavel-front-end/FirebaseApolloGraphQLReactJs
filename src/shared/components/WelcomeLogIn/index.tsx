import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { colors } from "../../../theme/theme";
import SocialLogIn from "../SocialLogIn";
import { PersonIcon } from "../ui/icons/Person";

const WelcomeLogIn = () => {
  const { t } = useTranslation();
  return (
    <Grid container item lg={6} justifyContent={'center'} alignContent={'center'} direction={'column'} alignItems={{lg: 'center'}}>
      <Typography variant="h2" component="h1" sx={{ marginBottom: "3rem" }}>
        {t("welcome")}
      </Typography>
      <Button
        variant="contained"
        component={NavLink}
        to="/sign-up"
        startIcon={<PersonIcon />}
        sx={{ marginBottom: "3rem", maxWidth: "458px", width: "100%" }}
      >
        Sign up with phone or email
      </Button>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          maxWidth: "calc(458px - 2rem)",
          width: "100%",
          justifyContent: "center",
          padding: "0 2rem",
          marginBottom: "2.5rem",
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
            position: 'relative'
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
        <Typography variant="body2">Already registered?</Typography>
        <Button
          variant="text"
          component={NavLink}
          to="/log-in"
          sx={{
            color: colors.purple,
            fontSize: "0.875rem",
            padding: "0 0.5rem",
            ":hover": {
              color: colors.purple,
            },
          }}
        >
          Tap here to Log In
        </Button>
      </Box>
    </Grid>
  );
};

export default WelcomeLogIn;
