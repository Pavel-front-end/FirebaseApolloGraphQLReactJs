import React, { useState } from "react";
import { Box, Button, CircularProgress, FormHelperText } from "@mui/material";
import { useAuth } from "../../../../context/AuthContext";
import useRedirectAfterLogin from "../../../../hooks/useRedirectAfterLogin";

interface Props {
  isErrorPass: boolean;
  password: string;
  isErrorEmail: boolean;
  email: string;
}

const ButtonLogIn = ({ isErrorEmail, isErrorPass, password, email }: Props) => {
  const { signIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const redirectSafelyToPreviousPage = useRedirectAfterLogin();

  const disabledBtn = () => {
    if (isErrorPass || password.length < 8 || isErrorEmail || loading) {
      return true;
    }
    return false;
  };

  const handleSubmitLogIn = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signIn(email, password);
      redirectSafelyToPreviousPage();
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  };
  return (
    <Box sx={{ margin: "2rem 0", position: "relative" }}>
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        disabled={disabledBtn()}
        onClick={handleSubmitLogIn}
      >
        {loading ? <CircularProgress color="inherit" /> : "Log In"}
      </Button>
      {error && (
        <FormHelperText sx={{ margin: "0 0.875rem" }}>{error}</FormHelperText>
      )}
    </Box>
  );
};

export default ButtonLogIn;
