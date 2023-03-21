import React, { FC } from "react";
import { Avatar, Box, Divider, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { colors } from "../../../../theme/theme";
import { IUser } from "../../../../types/IUserByAuthId";
import { formatDate, sliceAddress } from "../../../../utilities";

interface Props {
  userData: IUser | undefined;
}

const UserData: FC<Props> = ({ userData }) => {
  const matches = useMediaQuery("(max-width: 650px)");
  return (
    <Box my={"2rem"}>
      <Avatar
        sx={{
          width: "5.625rem",
          height: "5.625rem",
          color: colors.lightWhite2,
          margin: "1.5rem 0",
        }}
        src={userData?.avatar}
      >
        User
      </Avatar>
      <Box>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            User name:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.username || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            First name:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.firstName || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Last name:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.lastName || "n/a"}
          </Typography>
        </Stack>
      </Box>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <Box>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Phone number:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.phoneNumber ? `+${userData?.phoneNumber}` : "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Email:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.email || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Email verified:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.emailVerified ? "verified" : "not verified"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Subscribed:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.isSubscribed ? "yes" : "no"}
          </Typography>
        </Stack>
      </Box>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <Box>
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
              ? sliceAddress(userData?.walletAddress) || "n/a"
              : userData?.walletAddress || "n/a"}
          </Typography>
        </Stack>
      </Box>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <Box>
        <Typography variant="body1" mb={"0.625rem"} color={colors.grey}>
          Address
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Street:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.address?.street || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Apartment:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.address?.apartment || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            City:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.address?.city || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            zipCode:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.address?.zipCode || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            State:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.address?.state || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Country:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.address?.country || "n/a"}
          </Typography>
        </Stack>
      </Box>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <Box>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Description:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.biography || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Skills:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.tags?.join(",") || "n/a"}
          </Typography>
        </Stack>
      </Box>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <Box>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Followers:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.followers || "n/a"}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Following:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {userData?.following || "n/a"}
          </Typography>
        </Stack>
      </Box>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <Box>
        <Stack
          direction="row"
          spacing={2}
          mb={"0.625rem"}
          alignItems={"flex-end"}
        >
          <Typography variant="body1" color={colors.grey}>
            Last App launch:
          </Typography>
          <Typography variant="h4" lineHeight={1.5}>
            {formatDate(userData?.lastAppLaunch) || "n/a"}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default UserData;
