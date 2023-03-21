import { useMutation } from "@apollo/client";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../../../../context/AuthContext";
import { UPDATE_USERNAME } from "../../../../../GraphQLOperation/private/mutation";
import { USER_BY_ID_FULL } from "../../../../../GraphQLOperation/private/queries";
import { validatorUsername } from "../../../../../utilities";

interface Props {
  username: string | undefined;
}

const UpdateUsername = ({ username }: Props) => {
  const { user } = useAuth();
  const uid = user.uid;
  const [currentUsername, setCurrentUsername] = useState(username || "");
  const [isErrorUsername, setErrorUsername] = useState(false);
  const isValidUsername = (valueInput: string) => {
    if (validatorUsername.test(valueInput)) {
      setErrorUsername(false);
    } else {
      setErrorUsername(true);
    }
  };

  const [updateUsername, { loading }] = useMutation(UPDATE_USERNAME, {
    refetchQueries: [{ query: USER_BY_ID_FULL, variables: { id: uid } }],
  });

  const handleUpdateUsername = () => {
    updateUsername({
      variables: { username: currentUsername },
    });
  };
  return (
    <Stack direction={{md: "row"}} spacing={2} alignItems={{md: "center"}}>
      <Stack sx={{ width: "100%", maxWidth: "350px", marginY: "1rem" }}>
        <TextField
          error={isErrorUsername}
          type="text"
          variant="outlined"
          inputProps={{ "data-testid": "username" }}
          label="Username"
          value={currentUsername}
          onChange={(e) => setCurrentUsername(e.target.value)}
          onBlur={(e) => isValidUsername(e.target.value)}
          helperText={
            isErrorUsername
              ? "6-24, 3 alphabetic, alpha, numb, dash, underscore"
              : ""
          }
        />
      </Stack>
      <Stack sx={{ width: "100%", maxWidth: "170px", marginY: "1rem" }}>
        <Button
          variant="contained"
          disabled={username === currentUsername || isErrorUsername}
          onClick={handleUpdateUsername}
        >
          {loading ? <CircularProgress color="inherit" size={24} /> : "Update"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default UpdateUsername;
