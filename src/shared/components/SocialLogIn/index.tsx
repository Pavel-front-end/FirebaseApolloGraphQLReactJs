import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import theme from "../../../theme/theme";
import useRedirectAfterLogin from "../../../hooks/useRedirectAfterLogin";

const SocialLogIn = () => {
  const [error, setError] = useState("");
  const { signInWithGoogle, signInWithFacebook, signInWithTwitter } = useAuth();

  const redirectSafelyToPreviousPage = useRedirectAfterLogin();

  const handleSubmitLogInGoogle = async (e: any) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithGoogle();
      redirectSafelyToPreviousPage();
    } catch (e: any) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleSubmitLogInFacebook = async (e: any) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithFacebook();
      redirectSafelyToPreviousPage();
    } catch (e: any) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleSubmitLogInTwitter = async (e: any) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithTwitter();
      redirectSafelyToPreviousPage();
    } catch (e: any) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <Box sx={{ margin: "0 auto 2.5rem", maxWidth: "420px" }}>
      <Box
        sx={{ display: "grid", gap: 1, gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <Button
          startIcon={<GoogleIcon />}
          sx={{ [theme.breakpoints.only("xs")]: { fontSize: "0.875rem" } }}
          variant="outlined"
          onClick={handleSubmitLogInGoogle}
        >
          Google
        </Button>
        <Button
          startIcon={<FacebookIcon />}
          sx={{ [theme.breakpoints.only("xs")]: { fontSize: "0.875rem" } }}
          variant="outlined"
          onClick={handleSubmitLogInFacebook}
        >
          Facebook
        </Button>
        <Button
          startIcon={<TwitterIcon />}
          sx={{ [theme.breakpoints.only("xs")]: { fontSize: "0.875rem" } }}
          variant="outlined"
          onClick={handleSubmitLogInTwitter}
        >
          Twitter
        </Button>
      </Box>
      {error && <Typography variant="body1">{error}</Typography>}
    </Box>
  );
};

export default SocialLogIn;
