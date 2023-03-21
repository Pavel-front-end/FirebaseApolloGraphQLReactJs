import { Box, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { colors } from '../../../../../theme/theme';
import { sliceAddress } from '../../../../../utilities';
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import UpdateWalletAddress from '../ChangeUserData/UpdateWalletAddress';

interface Props {
    walletAddress: string | undefined;
  }

const UserWalletAddress = ({walletAddress} : Props) => {
    const matches = useMediaQuery("(max-width: 650px)");
    const [isEditMode, setIsEditMode] = useState(false);
  
    const toggleEdit = () => {
      setIsEditMode((prevState) => !prevState);
    };
  return (
    <Box position={"relative"}>
    <Box
      sx={{
        position: "absolute",
        right: "0",
        zIndex: 1,
      }}
    >
      <IconButton
        onClick={toggleEdit}
      >
        {isEditMode ? <CloseIcon /> : <EditIcon /> }
      </IconButton>
    </Box>

    {isEditMode ? <UpdateWalletAddress wallet={walletAddress} toggleEdit={toggleEdit} /> :
    <Stack
      direction="row"
      spacing={2}
      mb={"0.625rem"}
      alignItems={"flex-end"}
    >
      <Typography variant="body1" color={colors.grey}>
        Wallet Address:
      </Typography>
      <Typography variant="h4" lineHeight={1.5}>
        {matches
          ? sliceAddress(walletAddress) || "n/a"
          : walletAddress || "n/a"}
      </Typography>
    </Stack>}
  </Box>
  )
}

export default UserWalletAddress