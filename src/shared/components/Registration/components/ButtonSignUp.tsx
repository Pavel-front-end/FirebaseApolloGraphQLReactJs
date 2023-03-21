import React, { useState } from "react";
import { Box, Button, CircularProgress, FormHelperText } from "@mui/material";
import { useAuth } from "../../../../context/AuthContext";
import useRedirectAfterLogin from "../../../../hooks/useRedirectAfterLogin";

interface Props {
  isErrorPass: boolean;
  password: string;
  isErrorEmail: boolean;
  isErrorPassConfirm: boolean;
  email: string;
  checked: boolean;
}

const ButtonSignUp = ({
  isErrorEmail,
  isErrorPass,
  isErrorPassConfirm,
  password,
  email,
  checked,
}: Props) => {
  const { createUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const redirectSafelyToPreviousPage = useRedirectAfterLogin();

  const disabledBtn = () => {
    if (
      isErrorPass ||
      password.length < 8 ||
      isErrorPassConfirm ||
      !checked ||
      isErrorEmail ||
      loading
    ) {
      return true;
    }
    return false;
  };

  const handleSubmitSignUp = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createUser(email, password);
      setLoading(false);
      redirectSafelyToPreviousPage();
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ margin: "1rem 0", position: "relative", maxWidth: "458px" }}>
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        disabled={disabledBtn()}
        onClick={handleSubmitSignUp}
      >
        {loading ? (
          <CircularProgress color="inherit" />
        ) : (
          "Create personal account"
        )}
      </Button>
      {error && (
        <FormHelperText sx={{ margin: "0 0.875rem" }}>{error}</FormHelperText>
      )}
    </Box>
  );
};

export default ButtonSignUp;
