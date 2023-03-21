import React, { FC } from "react";
import { Box, Divider, Grid, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { colors } from "../../../../../theme/theme";
import { IUser } from "../../../../../types/IUserByAuthId";
import { formatDate } from "../../../../../utilities";
import PersonalInfoForm from "./PersonalInfoForm";
import AddressFrom from "./AddressFrom";
import UsernameForm from "./UsernameForm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UserWalletAddress from "./UserWalletAddress";

interface Props {
  userData: IUser | undefined;
}

const UserDataLayout: FC<Props> = ({ userData }) => {
  return (
    <Box my={"2rem"}>
      <PersonalInfoForm userData={userData} />

      <Divider sx={{ margin: "1.5rem 0" }} />

      <AddressFrom userData={userData} />

      <Divider sx={{ margin: "1.5rem 0" }} />

      <UsernameForm userData={userData} />

      <Divider sx={{ margin: "1.5rem 0" }} />

      <UserWalletAddress walletAddress={userData?.walletAddress} />

      <Divider sx={{ margin: "1.5rem 0" }} />

      <Stack direction="row" spacing={2} mb={"0.625rem"} alignItems={"center"}>
        <Typography variant="body1" color={colors.grey}>
          Email:
        </Typography>
        <Typography variant="h4" lineHeight={1.5}>
          {userData?.email || "n/a"}
        </Typography>

        {userData?.emailVerified && (
          <Tooltip title="Email Verified">
            <CheckCircleIcon sx={{ color: colors.blue }} />
          </Tooltip>
        )}
      </Stack>

      <Divider sx={{ margin: "1.5rem 0" }} />

      <Box>
        <Grid
          container
          position={"relative"}
          direction={"row"}
          justifyItems="between"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={6}>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                mb={"0.625rem"}
                alignItems={"flex-end"}
              >
                <Typography variant="body1" color={colors.grey}>
                  Last app launch:
                </Typography>
                <Typography variant="h4" lineHeight={1.5}>
                  {formatDate(userData?.lastAppLaunch) || "n/a"}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              mb={"0.625rem"}
              alignItems={"flex-end"}
            >
              <Typography variant="body1" color={colors.grey}>
                Last profile update:
              </Typography>
              <Typography variant="h4" lineHeight={1.5}>
                {formatDate(userData?.updatedAt) || "n/a"}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserDataLayout;
