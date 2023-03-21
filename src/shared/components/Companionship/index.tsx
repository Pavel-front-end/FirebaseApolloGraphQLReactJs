import { Button, IconButton, Stack } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { colors } from "../../../theme/theme";
import { useState } from "react";
const Companionship = () => {
  const [isFollow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow((prev) => !prev);
  };

  return (
    <Stack direction={"row"} spacing={2}>
      <Button
        variant="contained"
        sx={{
          width: {xs: "125px", sm:"150px", lg:"170px"},
          color: colors.dark,
          background: colors.white,
          ":hover": {
            background: colors.lightWhite2,
          },
        }}
        onClick={handleFollow}
      >
        {isFollow ? "Unsubscribe" : "Follow"}
      </Button>
      <Button variant="contained" sx={{ width: {xs: "125px", sm:"150px", lg:"170px"} }}>
        Message
      </Button>
      <IconButton
        sx={{
          width: "3.5rem",
          height: "3.5rem",
          backgroundColor: colors.lightDark,
          borderRadius: "0.625rem",
        }}
      >
        {" "}
        <ShareIcon />
      </IconButton>
    </Stack>
  );
};

export default Companionship;
