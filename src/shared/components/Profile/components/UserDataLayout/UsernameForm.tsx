import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/material.css";
import {
  Alert,
  Box,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { colors } from "../../../../../theme/theme";
import { IUser } from "../../../../../types/IUserByAuthId";
import CloseIcon from "@mui/icons-material/Close";
import * as yup from "yup";
import { useFormik } from "formik";
import FormikTextInput from "../../../ui/FormikTextInput/FormikTextInput";

import { useLazyQuery, useMutation } from "@apollo/client";
import { UPDATE_USERNAME } from "../../../../../GraphQLOperation/private/mutation";
import { LoadingButton } from "@mui/lab";
import { USERNAME_AVAILABILITY } from "../../../../../GraphQLOperation/private/queries";
import { validatorUsername } from "../../../../../utilities";

const validationSchema = yup.object({
  username: yup
    .string()
    .matches(validatorUsername, "Username format is not valid")
    .required("Username is required"),
});

function UsernameForm({ userData }: { userData: IUser | undefined }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateUsername({
        variables: {
          ...values,
        },
      });
    },
  });

  const [updateUsername, { loading, data, error }] =
    useMutation(UPDATE_USERNAME);

  const [
    checkUserName,
    {
      data: dataFromAvailability,
      loading: loadingFromAvailability,
      error: errorFromAvailability,
    },
  ] = useLazyQuery(USERNAME_AVAILABILITY, {
    fetchPolicy: "no-cache",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [updateError, setUpdateError] = useState(false);

  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const toggleEdit = () => {
    setIsEditMode((prevState) => !prevState);
  };

  // AVAILABILITY EFFECT
  useEffect(() => {
    if (dataFromAvailability) {
      if (dataFromAvailability?.usernameAvailability?.available) {
        setUsernameAvailable(
          dataFromAvailability?.usernameAvailability?.available
        );
      } else {
        formik.setErrors({
          username: "Username is not available",
        });
      }
    }

    if (errorFromAvailability) {
      setUpdateError(true); // show snackbar
    }
  }, [dataFromAvailability, errorFromAvailability]);

  // VALUE CHANGE LISTENER TO SHOW CHECK BUTTON
  useEffect(() => {
    setUsernameAvailable(false); // RESET USERNAME AVAILABILITY ON VALUE CHANGE
  }, [formik.values.username]);

  useEffect(() => {
    if (data) {
      // reset form & state
      formik.resetForm();
      setUsernameAvailable(false);
      setUpdateError(false);
      toggleEdit();
    }

    if (error) {
      setUpdateError(true); // show snackbar
    }
  }, [data, error]);

  if (isEditMode) {
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Box position={"relative"}>
            <Snackbar
              open={updateError}
              autoHideDuration={6000}
              onClose={() => setUpdateError(false)}
            >
              <Alert severity="error">Error while updating username.</Alert>
            </Snackbar>

            <Box
              sx={{
                position: "absolute",
                right: "0",
                zIndex: 1,
              }}
            >
              <IconButton onClick={toggleEdit}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Grid
              container
              position={"relative"}
              direction={"row"}
              justifyItems={"between"}
              alignItems={"flex-start"}
            >
              <Grid item xs={12} md={6}>
                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="username"
                    label="Username"
                    formik={formik}
                    helperText={
                      (usernameAvailable && "Username is available") ||
                      (formik.touched.username && formik.errors.username)
                    }
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  {(!!!usernameAvailable && (
                    <LoadingButton
                      color="primary"
                      variant="contained"
                      loading={loadingFromAvailability}
                      onClick={() => {
                        checkUserName({
                          variables: {
                            username: formik.values.username,
                          },
                        });
                      }}
                    >
                      Check Availability
                    </LoadingButton>
                  )) || (
                    <>
                      <LoadingButton
                        color="primary"
                        variant="contained"
                        loading={loading}
                        type="submit"
                      >
                        Set Username
                      </LoadingButton>
                    </>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <Box position={"relative"}>
          <Box
            sx={{
              position: "absolute",
              right: "0",
              zIndex: 1,
            }}
          >
            <IconButton onClick={toggleEdit}>
              <EditIcon />
            </IconButton>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            mb={"0.625rem"}
            alignItems={"flex-end"}
          >
            <Typography variant="body1" color={colors.grey}>
              Username:
            </Typography>
            <Typography variant="h4" lineHeight={1.5}>
              {userData?.username || "n/a"}
            </Typography>
          </Stack>
        </Box>
      </div>
    );
  }
}

export default UsernameForm;
