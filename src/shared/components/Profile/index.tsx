import React, { useEffect, useState } from "react";
import { CircularProgress, Grid, Paper, Typography } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { MY_PROFILE_FULL } from "../../../GraphQLOperation/private/queries";
import { IMyProfile, IUser } from "../../../types/IUserByAuthId";
import { Stack } from "@mui/system";
import { colors } from "../../../theme/theme";

import { CREATE_USER_PROFILE } from "../../../GraphQLOperation/private/mutation";
import UserDataLayout from "./components/UserDataLayout/UserDataLayout";
import AvatarForm from "./components/UserDataLayout/AvatarForm";
import WallpaperForm from "./components/UserDataLayout/WallpaperForm";

const Profile = () => {
  const [data, setData] = useState<IUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  // main loading, merge between loading from query and mutation
  const [loading, setLoading] = useState<boolean>(true);

  const {
    loading: loadingFromQueryingProfile,
    data: dataFromQueryingProfile,
    error: errorFromQueryingProfile,
  } = useQuery<IMyProfile>(MY_PROFILE_FULL);

  const [
    createDataUser,
    {
      data: dataFromCreatingUser,
      loading: loadingFromCreatingUser,
      error: errorFromCreatingUser,
    },
  ] = useMutation(CREATE_USER_PROFILE);

  /**
   *  Effects flow:
   *  If the user has a profile, pass it to state, to show.
   *  If the user does not have a profile, call create a new profile,
   *  then pass response to state.
   */

  // First useEffect to load the profile.
  useEffect(() => {
    if (!!dataFromQueryingProfile?.myProfile) {
      setData(dataFromQueryingProfile?.myProfile);
      setLoading(false);
    } else if (dataFromQueryingProfile?.myProfile === null) {
      createDataUser();
    }
  }, [dataFromQueryingProfile, errorFromQueryingProfile]);

  // Second useEffect when user profile gets created
  useEffect(() => {
    if (!!dataFromCreatingUser?.createUserProfile) {
      setData(dataFromCreatingUser?.createUserProfile);
      setLoading(false);
    } else if (errorFromCreatingUser) {
      setData(null);
      setError(errorFromCreatingUser.message);
      setLoading(false);
    }
  }, [dataFromCreatingUser, errorFromCreatingUser]);

  return (
    <>
      <WallpaperForm wallpaper={data?.coverImage} />

      <Grid container item md={6} position={"relative"} direction={"column"}>
        <AvatarForm avatar={data?.avatar} />
      </Grid>

      <Paper
        sx={{
          padding: "3rem 2rem",
          borderRadius: "0rem",
          borderBottomLeftRadius: "0.625rem",
          borderBottomRightRadius: "0.625rem",
          background: colors.lightDark,
          margin: "0rem auto 2rem",
          maxWidth: "1340px",
        }}
      >
        {loading && (
          <Stack alignItems={"center"}>
            <CircularProgress data-testid="loading" />
          </Stack>
        )}

        {!!error && !!!data && (
          <Typography variant="body1">
            Something wrong with the server. Try again later
          </Typography>
        )}

        {!!data && <UserDataLayout userData={data} />}
      </Paper>
    </>
  );
};

export default Profile;
