import { useMutation } from "@apollo/client";
import { Box, Button, CircularProgress } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useAuth } from "../../../../../context/AuthContext";
import { UPDATE_USER_EMAIL } from "../../../../../GraphQLOperation/private/mutation";
import { USER_BY_ID_FULL } from "../../../../../GraphQLOperation/private/queries";
import InputEmail from "../../../ui/InputEmail";

interface Props {
  email: string | undefined;
}

const UpdateEmail = ({ email }: Props) => {
  const { user } = useAuth();
  const uid = user.uid;
  const [currentEmail, setCurrentEmail] = useState(email || "");
  const [isErrorEmail, setErrorEmail] = useState(false);

  const [updateEmail, { loading }] = useMutation(UPDATE_USER_EMAIL, {
    refetchQueries: [{ query: USER_BY_ID_FULL, variables: { id: uid } }],
  });

  const handleUpdateEmail = () => {
    updateEmail({
      variables: { email: currentEmail },
    });
  };
  return (
    <Stack direction={{md: "row"}} spacing={2} alignItems={{md: "center"}}>
      <Stack sx={{ width: "100%", maxWidth: "350px", marginY: "1rem" }}>
        <InputEmail
          isErrorEmail={isErrorEmail}
          setEmail={setCurrentEmail}
          setErrorEmail={setErrorEmail}
          emailValue={currentEmail}
        />
      </Stack>
      <Stack sx={{ width: "100%", maxWidth: "170px", marginY: "1rem" }}>
        <Button
          variant="contained"
          disabled={email === currentEmail || isErrorEmail}
          onClick={handleUpdateEmail}
        >
          {loading ? <CircularProgress color="inherit" size={24} /> : "Update"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default UpdateEmail;
